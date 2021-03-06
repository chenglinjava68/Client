import React, { useCallback } from 'react';
import { View, Clipboard, TouchableOpacity } from 'react-native';
import _get from 'lodash/get';
import Base from './Base';
import styled from 'styled-components/native';
import { connect, useDispatch } from 'react-redux';
import { TRPGDispatchProp } from '@redux/types/__all__';
import { MessageProps } from '@shared/components/message/MessageHandler';
import { revokeMsg } from '@redux/actions/chat';
import BBCode from './bbcode/__all__';
import { useWebsiteInfo } from '@shared/hooks/useWebsiteInfo';
import _isString from 'lodash/isString';
import TImage from '../TComponent/TImage';
import FastImage from 'react-native-fast-image';
import { MsgQuote } from './addons/MsgQuote';
import { openMsgModal, MsgOperationItem } from './addons/MsgModal';
import { DefaultMsgReply } from './addons/DefaultMsgReply';
import { useTRPGStackNavigation } from '@app/router';
import { openWebview } from '@app/navigate';

const MsgContainer = styled.TouchableHighlight.attrs({
  underlayColor: '#eee',
})<{
  isImage: boolean;
}>`
  padding: ${(props) => (props.isImage ? 0 : '6px 8px')};
`;

const DefaultAddonContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-top-width: 0.5px;
  border-top-color: rgba(232, 232, 232, 0.8);
  padding: 4px 0;
  margin-top: 4px;
`;
const DefaultAddonInfo = styled.View`
  flex: 1;
`;
const DefaultAddonInfoTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
`;
const DefaultAddonInfoContent = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 10px;
`;
const DefaultAddonImage = styled(TImage).attrs({
  resizeMode: FastImage.resizeMode.cover,
})`
  width: 48px;
  height: 48px;
`;

const DefaultAddonContent: React.FC<{ message: string }> = React.memo(
  (props) => {
    const { loading, hasUrl, info } = useWebsiteInfo(props.message);
    const navigation = useTRPGStackNavigation(); // 该组件位于ChatScreen

    const handleClick = useCallback(() => {
      if (hasUrl && _isString(info.url)) {
        openWebview(navigation, info.url);
      }
    }, [info.url, navigation]);

    if (!hasUrl || loading || info.title === '') {
      return null;
    }

    return (
      <TouchableOpacity onPress={handleClick}>
        <DefaultAddonContentContainer>
          <DefaultAddonInfo>
            <DefaultAddonInfoTitle>{info.title}</DefaultAddonInfoTitle>
            <DefaultAddonInfoContent>{info.content}</DefaultAddonInfoContent>
          </DefaultAddonInfo>
          <View>
            {_isString(info.icon) && <DefaultAddonImage url={info.icon} />}
          </View>
        </DefaultAddonContentContainer>
      </TouchableOpacity>
    );
  }
);

interface Props extends TRPGDispatchProp, MessageProps {}
class Default extends Base<Props> {
  get isMsgPadding() {
    return false;
  }

  /**
   * 消息文本
   */
  get message() {
    return _get(this.props, 'info.message', '');
  }

  /**
   * 是否为纯图片
   */
  get isImage() {
    const message = this.message;
    const isImage = message.startsWith('[img]') && message.endsWith('[/img]');
    return isImage;
  }

  handleLongPress = () => {
    const operations: MsgOperationItem[] = [
      {
        name: '复制到剪切板',
        action: () => {
          // 复制文本到剪切板
          Clipboard.setString(this.message);
        },
      },
      {
        component: <DefaultMsgReply payload={this.props.info} />,
      },
    ];

    if (this.props.me) {
      operations.push({
        name: '撤回消息',
        action: () => {
          // 撤回消息
          this.props.dispatch(revokeMsg(this.props.info.uuid));
        },
      });
    }

    openMsgModal(operations);
  };

  getContent() {
    return (
      <MsgContainer isImage={this.isImage} onLongPress={this.handleLongPress}>
        <View>
          {this.msgDataManager.hasReplyMsg() && (
            <MsgQuote replyMsg={this.msgDataManager.getReplyMsg()} />
          )}
          <BBCode plainText={this.message} />
          <DefaultAddonContent message={this.message} />
        </View>
      </MsgContainer>
    );
  }
}

export default connect()(Default as any);

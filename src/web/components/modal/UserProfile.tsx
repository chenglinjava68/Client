import React, { useCallback } from 'react';
import { TMemo } from '@shared/components/TMemo';
import { useCachedUserInfo } from '@shared/hooks/useCache';
import Avatar from '../Avatar';
import { getUserName } from '@shared/utils/data-helper';
import { Button, Tabs, Divider, Space, Row, Col } from 'antd';
import { useTranslation } from '@shared/i18n';
import { FullModalField } from '../FullModalField';
import { getFullDate } from '@shared/utils/date-helper';
import { openModal, useModalContext } from '../Modal';
import styled from 'styled-components';
import { useCurrentUserInfo } from '@redux/hooks/user';
import {
  useTRPGSelector,
  useTRPGDispatch,
} from '@shared/hooks/useTRPGSelector';
import { useHistory } from 'react-router';
import { sendFriendRequest } from '@redux/actions/user';
import { addConverse } from '@redux/actions/chat';

const Root = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 8px;
`;

const InfoAvatar = styled(Avatar).attrs({
  size: 64,
})`
  margin-right: 10px;
`;

const InfoText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

const InfoTextSub = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.color['dusty-gray']};
`;

const TabsContainer = styled.div`
  padding: 0 8px;
`;

function useShowFriendRequest(userUUID: string): boolean {
  const currentUserInfo = useCurrentUserInfo();
  const friendList = useTRPGSelector((state) => state.user.friendList);

  if (currentUserInfo.uuid === userUUID) {
    return false;
  }

  return !friendList.includes(userUUID);
}

/**
 * 用户详情信息
 */
interface UserProfileProps {
  userUUID: string;
}
export const UserProfile: React.FC<UserProfileProps> = TMemo((props) => {
  const { userUUID } = props;
  const userInfo = useCachedUserInfo(userUUID, { forceFetch: true });
  const { t } = useTranslation();
  const dispatch = useTRPGDispatch();
  const history = useHistory();
  const name = getUserName(userInfo);

  const showFriendRequest = useShowFriendRequest(userUUID);
  const { closeModal } = useModalContext();

  const handleSendMsg = useCallback(() => {
    dispatch(
      addConverse({
        uuid: userUUID,
        type: 'user',
        name,
      })
    );
    history.push(`/main/personal/converse/${userUUID}`);
    closeModal();
  }, [history, userUUID, name, closeModal]);

  const handleFriendRequest = useCallback(() => {
    dispatch(sendFriendRequest(userUUID));
  }, [userUUID]);

  return (
    <Root>
      <Info>
        <InfoAvatar src={userInfo.avatar} name={name} />
        <InfoText>
          <div>{name}</div>
          <InfoTextSub>{userInfo.username}</InfoTextSub>
        </InfoText>
        <Space>
          {/* actions */}
          {showFriendRequest && (
            <Button type="default" onClick={handleFriendRequest}>
              {t('发送好友申请')}
            </Button>
          )}
          <Button type="primary" onClick={handleSendMsg}>
            {t('发送消息')}
          </Button>
        </Space>
      </Info>
      <Divider style={{ margin: 0 }} />
      <TabsContainer>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane key="1" tab={t('用户信息')}>
            <Row>
              <Col sm={12}>
                <FullModalField title={t('性别')} value={userInfo.sex} />
              </Col>
              <Col sm={12}>
                <FullModalField
                  title={t('最后登录时间')}
                  value={getFullDate(userInfo.last_login)}
                />
              </Col>
            </Row>
            <Row>
              <FullModalField
                title={t('简介')}
                value={<pre style={{ maxHeight: 240 }}>{userInfo.sign}</pre>}
              />
            </Row>
          </Tabs.TabPane>
        </Tabs>
      </TabsContainer>
    </Root>
  );
});
UserProfile.displayName = 'UserProfile';

/**
 * 打开一个用户信息的模态框
 * @param userUUID 用户UUID
 */
export function openUserProfile(userUUID: string) {
  openModal(<UserProfile userUUID={userUUID} />);
}

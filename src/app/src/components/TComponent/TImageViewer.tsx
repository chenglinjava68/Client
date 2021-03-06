import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import { View, Modal, TouchableOpacity } from 'react-native';
import { saveImageToLocal } from '@src/app/src/utils/file-helper';
import { Toast } from '@ant-design/react-native';
import TImage from './TImage';

interface Props {
  /**
   * 图片地址列表
   * 可以为单个字符串，也可以是一个字符串列表
   */
  images: string | string[];
  initIndex?: number;
}

class TImageViewer extends React.Component<Props> {
  state = {
    index: 0,
    modalVisible: false,
  };

  static defaultProps = {
    initIndex: 0,
  };

  constructor(props) {
    super(props);
    if (props.initIndex >= 0) {
      this.state.index = props.initIndex;
    }
  }

  get images() {
    const images = this.props.images;
    if (images) {
      let list: string[] = [];
      if (!Array.isArray(images)) {
        list = [images];
      } else {
        list = images;
      }

      return list.map((r) => {
        if (typeof r === 'string') {
          return { url: r };
        }
      });
    } else {
      return [];
    }
  }

  get menuContext() {
    return { saveToLocal: '保存到相册', cancel: '取消' };
  }

  handlePressChildren() {
    this.setState({ modalVisible: true });
  }

  handleSaveImage = (url: string) => {
    saveImageToLocal(url)
      .then(() => Toast.success('保存成功'))
      .catch((e) => {
        console.error(e);
        Toast.fail('保存失败:' + e.toString());
      });
  };

  hide() {
    this.setState({ modalVisible: false });
  }

  renderImage = (props: any): React.ReactElement<any> => {
    return <TImage {...props} url={props.source.uri} />;
  };

  render() {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.hide()}
        >
          <ImageViewer
            imageUrls={this.images}
            index={this.state.index}
            onSwipeDown={() => this.hide()}
            onClick={() => this.hide()}
            saveToLocalByLongPress={true}
            onSave={this.handleSaveImage}
            enableSwipeDown={true}
            menuContext={this.menuContext}
            renderImage={this.renderImage}
          />
        </Modal>
        <TouchableOpacity onPress={() => this.handlePressChildren()}>
          {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}

export default TImageViewer;

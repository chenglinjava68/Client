const React = require('react');
const ipcRenderer = require('electron').ipcRenderer;

import './TitleToolbar.scss';

class TitleToolbar extends React.Component {
  state = {
    isBig: false,
  };

  handleClose() {
    ipcRenderer.send('close-window');
  }

  handleMinimize() {
    ipcRenderer.send('hide-window');
  }

  handleMaximize() {
    if (this.state.isBig) {
      ipcRenderer.send('orignal-window');
      this.setState({ isBig: false });
    } else {
      ipcRenderer.send('show-window');
      this.setState({ isBig: true });
    }
  }

  render() {
    return (
      <div className="electron-title-toolbar">
        <button title="最小化" onClick={() => this.handleMinimize()}>
          <i className="iconfont">&#xe657;</i>
        </button>
        <button title="最大化" onClick={() => this.handleMaximize()}>
          {this.state.isBig ? (
            <i className="iconfont">&#xe618;</i>
          ) : (
            <i className="iconfont">&#xe60c;</i>
          )}
        </button>
        <button title="退出" onClick={() => this.handleClose()}>
          <i className="iconfont">&#xe610;</i>
        </button>
      </div>
    );
  }
}

export default TitleToolbar;

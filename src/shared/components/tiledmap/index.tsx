import React, { useRef, useEffect, useCallback } from 'react';
import { TiledMapManager } from './core/manager';
import './index.less';
import { ImageToken, Token } from './layer/token';
import { useKeyPressEvent, useKey } from 'react-use';
import _isNil from 'lodash/isNil';
import { joinMapRoom, updateToken } from './socket';
import { message } from 'antd';

/**
 * 按下空格键临时切换当前道具
 */
function useTmpToolSwitch(manager: React.MutableRefObject<TiledMapManager>) {
  const tmpSwitchRef = useRef<boolean>(false); // 标识当前是否为临时切换(通过按空格)
  const handleSpaceKeydown = useCallback(() => {
    if (!_isNil(manager.current)) {
      if (manager.current.toolbox.getCurrentToolName() === 'select') {
        manager.current.toolbox.setCurrentTool('move');
        tmpSwitchRef.current = true;
      }
    }
  }, [manager]);
  const handleSpaceKeyup = useCallback(() => {
    if (!_isNil(manager.current) && tmpSwitchRef.current === true) {
      if (manager.current.toolbox.getCurrentToolName() === 'move') {
        manager.current.toolbox.setCurrentTool('select');
        tmpSwitchRef.current = false;
      }
    }
  }, [manager]);
  useKeyPressEvent(' ', handleSpaceKeydown, handleSpaceKeyup);
}

function useDeleteToken(manager: React.MutableRefObject<TiledMapManager>) {
  const handler = useCallback(() => {
    if (_isNil(manager.current)) {
      return;
    }

    manager.current.removeSelectedToken();
  }, [manager]);
  useKey('Delete', handler);
}

interface TiledMapProps {
  mapUUID: string;
}
export const TiledMap: React.FC<TiledMapProps> = React.memo((props) => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const manager = useRef<TiledMapManager>(null);
  const tiledMapManagerRef = useRef<TiledMapManager>();

  useEffect(() => {
    if (_isNil(props.mapUUID)) {
      return;
    }

    joinMapRoom(props.mapUUID).then(() =>
      message.success(`连接地图 ${props.mapUUID} 成功`)
    );
  }, [props.mapUUID]);

  useEffect(() => {
    const tiledMapManager = new TiledMapManager(canvasRef.current, {
      size: {
        width: 20,
        height: 15,
      },
      gridSize: {
        width: 40,
        height: 40,
      },
      actions: {
        onAddToken(token) {
          console.log('addToken', token);
          updateToken('add', { token: token.getData() });
        },
        onUpdateToken(tokenId, tokenAttrs) {
          console.log('updateToken', tokenId, tokenAttrs);
          updateToken('update', { tokenId, tokenAttrs });
        },
        onRemoveToken(tokenId) {
          console.log('updateToken', tokenId);
          updateToken('remove', { tokenId });
        },
        onAddLayer(layer) {
          // TODO
          console.log('addLayer', layer);
        },
        onUpdateLayer(layerId, attrs) {
          // TODO
          console.log('updateLayer', layerId, attrs);
        },
        onRemoveLayer(layerId) {
          // TODO
          console.log('removeLayer', layerId);
        },
      },
    });
    tiledMapManagerRef.current = tiledMapManager;

    // ------------ test ------------
    const layer = tiledMapManager.addLayer('人物');
    const testToken = new ImageToken(
      '测试人物',
      'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2807058697,2434741312&fm=58'
    );
    testToken.gridPosition = {
      x: 2,
      y: 4,
    };
    tiledMapManager.addToken(layer.id, testToken);

    const layer2 = tiledMapManager.addLayer('背景');
    layer2.index = -1; // 应在人物下面
    const testToken2 = new ImageToken(
      '测试背景',
      'https://www.dytt8.net/images/m.jpg'
    );
    testToken2.gridPosition = {
      x: 1,
      y: 1,
    };
    tiledMapManager.addToken(layer2.id, testToken2);

    // ------------ test ------------

    manager.current = tiledMapManager;
  }, []);

  useTmpToolSwitch(manager);
  useDeleteToken(manager);

  /**
   * 测试
   */
  const testTokenRefs = useRef<Token[]>([]);
  const handleAppendToken = useCallback(() => {
    const name = Math.random()
      .toString()
      .substr(2);
    const token = new ImageToken(
      name,
      `https://trpgapi.moonrailgun.com/file/avatar/svg?name=${name}`
    );

    // 生成随机坐标
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 15);
    token.gridPosition = { x, y };

    tiledMapManagerRef.current?.addToken(
      tiledMapManagerRef.current?.getDefaultLayer().id,
      token
    );
    message.success(
      `增加Token ${token.name} [${token.gridPosition.x},${token.gridPosition.y}]`
    );
    testTokenRefs.current.push(token);
  }, [tiledMapManagerRef]);
  const handleRemoveToken = useCallback(() => {
    const token = testTokenRefs.current.shift();
    if (_isNil(token)) {
      return;
    }

    tiledMapManagerRef.current?.removeToken(token);
  }, [tiledMapManagerRef]);

  return (
    <div className="tiledmap">
      <canvas ref={canvasRef}>请使用现代浏览器打开本页面</canvas>
      <button onClick={handleAppendToken}>增加Token</button>
      <button onClick={handleRemoveToken}>移除Token</button>
    </div>
  );
});
TiledMap.displayName = 'TiledMap';

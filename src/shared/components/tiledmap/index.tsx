import React, { useRef, useEffect } from 'react';
import { TiledMapRender } from './core/render';

export const TiledMap: React.FC = React.memo((props) => {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const render = new TiledMapRender(canvasRef.current, {
      size: {
        width: 800,
        height: 600,
      },
      gridSize: {
        width: 40,
        height: 40,
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600}>
        请使用现代浏览器打开本页面
      </canvas>
    </div>
  );
});
TiledMap.displayName = 'TiledMap';
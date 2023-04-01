import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import SvgIcon from '@/components/svgIcon';
import screenfull from 'screenfull';

const FullScreen = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(screenfull.isFullscreen);

  useEffect(() => {
    screenfull.on('change', () => {
      if (screenfull.isFullscreen) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
    });

    return () => {
      screenfull.off('change', () => {});
    };
  }, []);

  const toggleScreenFull = async () => {
    if (!screenfull.isEnabled) {
      message.error('您的浏览器不支持全屏操作！');
    } else {
      await screenfull.toggle();
    }
  };
  return (
    <div onClick={toggleScreenFull}>
      {fullscreen ? (
        <SvgIcon iconClass={'fullScreenOut'} width={25} height={25} cursor={'pointer'} />
      ) : (
        <SvgIcon iconClass={'fullScreen'} width={25} height={25} cursor={'pointer'} />
      )}
    </div>
  );
};

export default FullScreen;

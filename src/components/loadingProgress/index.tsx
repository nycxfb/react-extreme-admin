import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import './index.less';

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

const LoadingProgress: React.FC = () => {
  console.log('出发了');
  const { pathname } = useLocation();
  useEffect(() => {
    NProgress.start();
  }, [pathname]);
  //组件消亡时执行 nprogress.done()
  useEffect(() => {
    return () => {
      NProgress.done();
    };
  });
  return <React.Fragment />;
};
export default LoadingProgress;

import React from 'react';
import SubscribeA from './components/subscribeA';
import SubscribeB from './components/subscribeB';
import Publish from './components/publish';
import './index.module.less';

const PublishSubscribePattern = () => {
  return (
    <div className={'design-container'}>
      <div>
        <Publish />
        <div className={'subscribe-wrapper'}>
          <SubscribeA />
          <SubscribeB />
        </div>
      </div>
    </div>
  );
};

export default PublishSubscribePattern;

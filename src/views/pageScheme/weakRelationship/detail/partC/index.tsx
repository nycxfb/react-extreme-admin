import React from 'react';
import { Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './index.module.less';
const PartC: React.FC = () => (
  <div className={'part-C'}>
    <h3>处理记录</h3>
    <Timeline>
      <Timeline.Item>
        <div>
          <span>陈峰</span>
          <span>22:31</span>
        </div>
        <div>关闭任务</div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
          <span>陈峰</span>
          <span>22:31</span>
        </div>
        <div>处理:这是个bug 已安排开发解决</div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
          <span>李晓明</span>
          <span>22:31</span>
        </div>
        <div>转交给陈峰处理</div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
          <span>冯娟娟</span>
          <span>22:31</span>
        </div>
        <div>分派任务 标题 ******</div>
      </Timeline.Item>
    </Timeline>
  </div>
);

export default PartC;

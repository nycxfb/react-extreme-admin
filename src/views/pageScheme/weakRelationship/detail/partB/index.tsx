import React from 'react';
import './index.module.less';
import { Button, Descriptions, Radio } from 'antd';

const PartB = () => {
  return (
    <div className={'part-B'}>
      <Descriptions bordered title="任务信息" style={{ marginBottom: '20px' }}>
        <Descriptions.Item label="分派人">李明有</Descriptions.Item>
        <Descriptions.Item label="分派时间">2022-03-15 17:27</Descriptions.Item>
        <Descriptions.Item label="任务分类">收银管理</Descriptions.Item>
        <Descriptions.Item label="处理人">赵燕</Descriptions.Item>
        <Descriptions.Item label="任务状态">进行中</Descriptions.Item>
        <Descriptions.Item label="预计完成时间">2022-04-15</Descriptions.Item>
        <Descriptions.Item label="实际完成时间">2022-05-07 18:05</Descriptions.Item>
        <></>
        <Descriptions.Item label="任务描述">处理客诉</Descriptions.Item>
        <></>
        <Descriptions.Item label="处理意见">同意结案</Descriptions.Item>
      </Descriptions>

      <Descriptions bordered title="工单信息">
        <Descriptions.Item label="工单编号">GD20190324010001</Descriptions.Item>
        <Descriptions.Item label="问题系统">前台收银</Descriptions.Item>
        <Descriptions.Item label="工单类型">系统问题</Descriptions.Item>
        <Descriptions.Item label="紧急程度">非常紧急</Descriptions.Item>
        <Descriptions.Item label="发起机构">益生堂</Descriptions.Item>
        <Descriptions.Item label="发起人员">刘洪</Descriptions.Item>
        <Descriptions.Item label="问题描述">收银系统发生计算错误</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default PartB;

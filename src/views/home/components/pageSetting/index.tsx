import React from 'react';
import SvgIcon from '@/components/svgIcon';
import { Col, Row, Switch } from 'antd';
import style from './index.module.less';
import { connect } from 'react-redux';
import { toggleBreadcrumbPart, toggleTagPart, toggleLogoPart, toggleFooterPart } from '@/redux/module/system/action';

const PageSetting = (props: any) => {
  const {
    toggleBreadcrumbPart,
    toggleTagPart,
    toggleLogoPart,
    toggleFooterPart,
    isShowTag,
    isShowBreadcrumb,
    isShowLogo,
    isShowFooter,
  } = props;

  const settingArray = [
    {
      id: 1,
      icon: 'tag',
      name: '标签',
      checked: isShowTag,
      event: 'onTagChange',
    },
    {
      id: 2,
      icon: 'logo-white',
      name: 'Logo',
      checked: isShowLogo,
      event: 'onLogoChange',
    },
    {
      id: 3,
      icon: 'footer',
      name: '页脚',
      checked: isShowFooter,
      event: 'onFooterChange',
    },
    {
      id: 4,
      icon: 'breadcrumb',
      name: '面包屑',
      checked: isShowBreadcrumb,
      event: 'onBreadcrumbChange',
    },
  ];

  const eventChange = (checked: boolean, event: string) => {
    switch (event) {
      case 'onTagChange':
        toggleTagPart(checked);
        break;
      case 'onLogoChange':
        toggleLogoPart(checked);
        break;
      case 'onFooterChange':
        toggleFooterPart(checked);
        break;
      case 'onBreadcrumbChange':
        toggleBreadcrumbPart(checked);
        break;
    }
  };

  return (
    <div className={style['card-wrapper']}>
      {settingArray.map((item: any) => (
        <div key={item.id} className={'setting-item'}>
          <Row>
            <Col span={12} className={'left-part'}>
              <SvgIcon width={26} height={26} iconClass={item.icon} />
              <span>{item.name}</span>
            </Col>
            <Col span={12} className={'right-part'}>
              <Switch
                onChange={(checked: boolean) => {
                  eventChange(checked, item.event);
                }}
                checked={item.checked}
              />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return { ...state.header, ...state.system };
};

const mapDispatchToProps = {
  toggleBreadcrumbPart,
  toggleTagPart,
  toggleLogoPart,
  toggleFooterPart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSetting);

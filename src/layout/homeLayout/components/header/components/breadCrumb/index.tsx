import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';

const Breadcrumbs: React.FC = (props: any) => {
  const { breadcrumb } = props;
  const { t } = useTranslation();
  console.log('breadcrumb');
  return (
    <Breadcrumb>
      {breadcrumb.map((item: any) => {
        return <Breadcrumb.Item key={item}>{t(`route.${item}`)}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

const mapStateToProps = (state: any) => {
  return state.header;
};

export default connect(mapStateToProps, {})(React.memo(Breadcrumbs));

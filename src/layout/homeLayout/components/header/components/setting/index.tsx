import React from 'react';
import { connect } from 'react-redux';
import SvgIcon from '@/components/svgIcon';
import { toggleDrawer } from '@/redux/module/header/action';

const Setting = (props: any) => {
  const { toggleDrawer } = props;
  const onOpenDrawer = () => {
    toggleDrawer(true);
  };

  return (
    <div onClick={onOpenDrawer}>
      <SvgIcon iconClass={'setting'} width={25} height={25} cursor={'pointer'} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = {
  toggleDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

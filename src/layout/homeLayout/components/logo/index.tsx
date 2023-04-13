import React from 'react';
import { connect } from 'react-redux';
import SvgIcon from '@/components/svgIcon';

const Logo = (props: any) => {
  const { isCollapse, menuTheme } = props;
  console.log('logo');
  return (
    <div className="side">
      <SvgIcon iconClass="logo-new" width={35} height={35} />
      {!isCollapse && (
        <span className={['title-dark', menuTheme === 'light' ? '\n title-white' : null].join('')}>Extreme Admin</span>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state.menu, ...state.system };
};
export default connect(mapStateToProps, {})(React.memo(Logo));

import React from 'react';
import PropTypes from 'prop-types';

interface svgProps {
  iconClass: number | string;
  width?: number | string;
  height?: number | string;
  cursor?: string;
}

const SvgIcon = (props: svgProps) => {
  const { iconClass, cursor, width, height } = props;

  return (
    <svg aria-hidden="true" className="svg-icon" style={{ width: width, height: height, cursor: cursor }}>
      <use xlinkHref={'#icon-' + iconClass} />
    </svg>
  );
};

SvgIcon.propTypes = {
  iconClass: PropTypes.string.isRequired
};

export default SvgIcon;

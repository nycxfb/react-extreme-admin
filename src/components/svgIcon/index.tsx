import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (props: { iconClass: any; }) => {
    const { iconClass } = props;
    return (
        <svg aria-hidden="true" className="svg-icon" >
            <use xlinkHref={"#icon-" + iconClass}  />
        </svg>
    );
};

SvgIcon.propTypes = {
    iconClass: PropTypes.string.isRequired
};

export default SvgIcon;


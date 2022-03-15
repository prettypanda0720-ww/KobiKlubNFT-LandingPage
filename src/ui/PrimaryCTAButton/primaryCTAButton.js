import React from 'react';
import './primaryBtnStyles.scss';

const PrimaryCTAButton = props => {

    return (
        <button
            className={`primaryBtn subscribe-btn
            ${props.size === 'big' ? "primaryBtn--big" : "primaryBtn--normal"}
            ${props.icon ? "primaryBtn--grid" : null}
            ${props.customClass}`}
            onClick={props.handleClick}
        >
            {props.icon && props.icon}
            {props.label}
        </button>


    );
}

export default PrimaryCTAButton;

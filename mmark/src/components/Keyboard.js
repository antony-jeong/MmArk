import React from 'react';
import PropTypes from 'prop-types';

const Keyboard = ({className}) => {
    return (
        <div className={`${className}`}>
            Keyboard Here.
        </div>
    );
};

Keyboard.propTypes = {
    className: PropTypes.string,
};

export default Keyboard;
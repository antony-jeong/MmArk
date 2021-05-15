import React from 'react';
import PropTypes from 'prop-types';

const Instruction = ({className, children}) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

Instruction.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
};

export default Instruction;
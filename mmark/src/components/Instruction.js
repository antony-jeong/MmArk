import React from 'react';
import PropTypes from 'prop-types';
import Parser from '../pages/Parser';
import "../stylesheets/Instruction.css";

const Instruction = ({className, inst}) => {
    return (
        <div className={`${className}`}>
            <Parser desc={inst}/>
        </div>
    );
};

Instruction.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
};

export default Instruction;
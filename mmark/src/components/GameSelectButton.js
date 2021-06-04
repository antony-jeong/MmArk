import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const GameSelectButton = ({src, name, children}) => {
    return (
        src?
        <Link to = {`/${src}${(src==="Community" || src==="login") ? "/" : "/1"}`} className = {`GameSelectButton ${src}Button `}>
            <div className = {'name'}> {name}</div>
            <div className = {'description'}>
                {children}
            </div>
        </Link>
        :
        <span className = {`GameSelectButton ${src}Button `}>
            <div className = {'name'}> {name}</div>
            <div className = {'description'}>
                {children}
            </div>
        </span>
    );
};

GameSelectButton.propTypes = {
    
};

export default GameSelectButton;
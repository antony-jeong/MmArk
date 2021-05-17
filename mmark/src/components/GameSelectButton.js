import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const GameSelectButton = ({src, name, children}) => {
    return (
        <Link to = {`/${src}/1`} className = {`GameSelectButton ${name}Button `}>
            <div className = {'name'}> {name}</div>
            <div className = {'description'}>
                {children}
            </div>
        </Link>
    );
};

GameSelectButton.propTypes = {
    
};

export default GameSelectButton;
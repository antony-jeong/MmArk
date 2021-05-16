import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Logo = ({className, isLink}) => {
    return (
        isLink?
        <Link to = {`/`} className={`${className}`}>
            Logo
        </Link>
        :<div className={`${className}`}>
            Logo
        </div>
    );
};

Logo.propTypes = {
    
};

export default Logo;
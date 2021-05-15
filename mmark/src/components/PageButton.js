import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const PageButton = ({text, className, router}) => {
    return (
        <Link to = {router} className = {`${className}`}>
            {text}
        </Link>
    );
};

PageButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    router: PropTypes.string.isRequired
};

export default PageButton;
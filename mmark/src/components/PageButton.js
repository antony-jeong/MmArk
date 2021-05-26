import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const PageButton = ({text, className, router, onClick, show}) => {

    return (
        router === undefined ?
            show?
                <span className={`${className}`===undefined?'':`${className}`} onClick={onClick}>
                    {text===undefined?'':text}
                </span>
            :   <span className={`${className}`===undefined?'Hide':`${className} Hide`}>
                    {text===undefined?'':text}
                </span>
        :<Link to = {router} className={`${className}`===undefined?'':`${className}`}>
            {text===undefined?'':text}
        </Link>
    );
};

PageButton.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    router: PropTypes.string.isRequired
};

export default PageButton;
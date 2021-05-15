import React from 'react';
import PropTypes from 'prop-types';

const InvalidPage = ({history}) => {
    const handleGoBack = () => {
        history.goBack();
    };

    const handleGoHome = () => {
        history.push('/');
    }

    return (
        <div>
            404 Error
            <button onClick={handleGoBack}>Return</button>
            <button onClick={handleGoHome}>Home</button>
        </div>
    );
};

InvalidPage.propTypes = {
    
};

export default InvalidPage;
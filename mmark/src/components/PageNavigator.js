import React from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';

const PageNavigator = ({className, gameName, pageNum, pageEnd, history}) => {
    const MoveTo = (e) => {
        if (e.key === "Enter")
            history.push(`/${gameName}/${e.target.value}`);
    };

    return (
        <div className={`${className}`===undefined?'':`${className}`}>
            <PageButton text = {'<'} className = "LearnNote-GoLeft" router = {`/${gameName}/${pageNum-1}`}/>
            <span className = {"LearnNote-PageIndicator"}><input Value={`${pageNum}`} onKeyPress={MoveTo}/>/{pageEnd}</span>
            <PageButton text = {'>'} className = "LearnNote-GoRight" router = {`/${gameName}/${pageNum+1}`}/>
        </div>
    );
};

PageNavigator.propTypes = {
    className: PropTypes.string,
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default PageNavigator;
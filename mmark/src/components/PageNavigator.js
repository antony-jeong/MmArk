import React from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';

const PageNavigator = ({className, chapterName, currentPage, pageEnd, history}) => {
    const MoveTo = (e) => {
        if (e.key === "Enter"){
            history.push(`/${chapterName}/${e.target.value}`);
        }
    };

    return (
        <div className={`${className}`}>
            <PageButton text = {'<'} className = "LearnNote-GoLeft" router = {`/${chapterName}/${currentPage-1}`}/>
            <span className = {"LearnNote-PageIndicator"}><input Value={`${currentPage}`} onKeyPress={MoveTo}/>/{pageEnd}</span>
            <PageButton text = {'>'} className = "LearnNote-GoRight" router = {`/${chapterName}/${currentPage+1}`}/>
        </div>
    );
};

PageNavigator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    wholePage: PropTypes.number.isRequired
};

export default PageNavigator;
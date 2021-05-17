import React from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';
import Logo from '../components/Logo';
import InvalidPage from '../pages/InvalidPage'

const LearnLayout = ({gameName, gamePage, pageNum, pageEnd, history}) => {
    if (pageNum < 1) history.push(`/${gameName}/1`);
    else if (pageNum > pageEnd) history.push(`/${gameName}/${pageEnd}`);
    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={`${gameName}`}>
            <Logo className={`Logo`} isLink={true}/>
            {gamePage}
            <PageButton text = {'Next'} className = {`Next`} router = {`/${gameName}/${pageNum+1}`}/>
        </div>
        :
        <InvalidPage history={history} />
    );
};

LearnLayout.propTypes = {
    gameName: PropTypes.string.isRequired,
    gamePage: PropTypes.node.isRequired,
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
};

export default LearnLayout;
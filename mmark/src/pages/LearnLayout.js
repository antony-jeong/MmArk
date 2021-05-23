import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';
import Logo from '../components/Logo';
import InvalidPage from '../pages/InvalidPage';
import PageNavigator from '../components/PageNavigator';


const LearnLayout = ({gameName, gamePage, pageNum, pageEnd, history}) => {
    let setPageNum = undefined;
    [pageNum, setPageNum] = useState(pageNum);
    let updateTimer = undefined;
    const update = () => {
        document.querySelector('.Instruction').classList.add('updated');
        document.querySelector('.Sheet').classList.add('updated');
        updateTimer = setTimeout(removeUpdate, 1000);
    }
    const removeUpdate = () => {
        document.querySelector('.Instruction').classList.remove('updated');
        document.querySelector('.Sheet').classList.remove('updated'); 
        
    }
    const callback = (newPageNum) => {
        if (newPageNum < 1){
            newPageNum = 1;
        } else if (newPageNum > pageEnd){
            newPageNum = pageEnd;
        } else if ((newPageNum >= 1) && (newPageNum <= pageEnd)){
            newPageNum = newPageNum; 
        } else {
            newPageNum = pageNum;
        }
        if (pageNum !== newPageNum){
            clearTimeout(updateTimer);
            update();
        }
        setPageNum(newPageNum);
        history.push(`/${gameName}/${newPageNum}`);
    }

    const handleNext = () => {
        callback(pageNum + 1);
    }

    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={`${gameName}`}>
            <Logo className={`Logo`} isLink={true}/>
            <PageNavigator className="PageNavigator" pageNum={pageNum} pageEnd={pageEnd} parentCallback={callback}/>
            {gamePage}
            <PageButton text = {'Next'} className = {`Next`} onClick={handleNext}/>
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

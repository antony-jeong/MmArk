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
    const [NextShow, setNextShow] = useState(pageNum!==pageEnd);
    const update = () => {
        document.querySelector('.Instruction').classList.add('updated');
        document.querySelector('.Sheet').classList.add('updated');
        updateTimer = setTimeout(removeUpdate, 1000);
    }
    const removeUpdate = () => {
        if (document.querySelector('.Instruction') && document.querySelector('.Sheet')){
            document.querySelector('.Instruction').classList.remove('updated');
            document.querySelector('.Sheet').classList.remove('updated');
        }
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
            document.querySelector('.Next').classList.remove('Pass');
        }
        setPageNum(newPageNum);
        history.push(`/${gameName}/${newPageNum}`);
        setNextShow(newPageNum!==pageEnd);
    }

    const handleNext = () => {
        let notPassTimer = undefined;
        if (document.querySelector('.Next').classList.contains('Pass'))
            callback(pageNum + 1);
        else {
            clearTimeout(notPassTimer);
            document.querySelector('.Next').classList.add('NotPass');
            notPassTimer = setTimeout(removeNotPass, 300);
        }
    }

    const removeNotPass = () => {
        document.querySelector('.Next').classList.remove('NotPass');
    }

    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={`${gameName}`}>
            <Logo className={`Logo`} isLink={true}/>
            <PageNavigator className="PageNavigator" pageNum={pageNum} pageEnd={pageEnd} parentCallback={callback}/>
            {gamePage}
            <PageButton text = {'Next'} className = {`Next`} onClick={handleNext} show={NextShow}/>
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

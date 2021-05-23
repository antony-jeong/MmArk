import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';


const PageNavigator = ({pageNum, className, pageEnd, parentCallback}) => {
    const [inputVal, setInput] = useState(`${pageNum}`);
    useEffect(() => { setInput(pageNum) }, [pageNum]);

    const leftSvg = <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.292893 8.70711C-0.097631 8.31658 -0.097631 7.68342 0.292893 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM2 9H1V7H2V9Z" fill="black"/>
    </svg>;

    const rightSvg = <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z" fill="black"/>
    </svg>;
    

    const MoveTo = (e) => {
        if (e.key === "Enter"){
            if (e.target.value === ""){ 
                parentCallback(pageNum);
                return;
            };
            e.target.blur();
            parentCallback(Number(e.target.value));
        }
    };


    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleLeft = () => {
        parentCallback(pageNum-1);
    };

    const handleRight = () => {
        parentCallback(pageNum+1);
    };
    
    return (
        <div className={`${className}`===undefined?'':`${className}`}>
            <PageButton text = {leftSvg} className = "GoLeft" onClick={handleLeft}/>
            <span className = {"PageIndicator"}><input value={inputVal} onFocus={e => e.target.select()} onChange={handleChange} onKeyPress={MoveTo}/> / {pageEnd}</span>
            <PageButton text = {rightSvg} className = "GoRight" onClick={handleRight}/>
        </div>
    );
};

PageNavigator.propTypes = {
    className: PropTypes.string,
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default PageNavigator;
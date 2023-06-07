import React from 'react';

const Pagination = ({ setPageNum, pageNum, pageCount }) => {
    const onNumDown = (event) => {
        console.log('down', pageNum, pageCount);
        if(pageNum > 0){
            setPageNum(pageNum - 1)
        }
    }
    const onNumUp = (event) => {
        console.log('up', pageNum, pageCount);
        if(pageNum < pageCount){
            setPageNum(pageNum + 1)
        }
    }
    return (
        <div className="pagination">
            <button className="pagination__button left" onClick={onNumDown}>이전</button>
            <span className="pagination__info">page <span className="pagination__number">{pageNum}</span></span>
            <button className="pagination__button right" onClick={onNumUp}>다음</button>
        </div>
    );
};

export default Pagination;
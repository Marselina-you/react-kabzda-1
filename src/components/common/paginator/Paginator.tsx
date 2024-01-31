import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number
}
const Paginator: React.FC<PropsType> = ({totalItemsCount, 
  pageSize, 
  currentPage =1 , 
  onPageChanged = x => x, 
  portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize );
  
  let pages: Array<number> = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push(i);
  }
  
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
 
let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


    return (
        
       
<div className={cn(s.paginator)}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

{pages
            .filter(pageF => {
               return pageF >= leftPortionPageNumber
                  && pageF <= rightPortionPageNumber
            })
            .map(page => {

               return (
                  <span
                     className={cn(
                        s.pageNumber,
                        {[s.selectedPage]: currentPage == page})
                     }
                     key={page}
                     onClick={() => {
                        onPageChanged(page);
                     }}>
            {page}
            </span>)

            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
    );
};



export default Paginator;
 //  { clsx({
                //   [s.selectedPage]: currentPage === p}, s.pageNumber) }
                //{ (currentPage === p ? s.selectedPage : '') + ' ' + s.pageNumber}
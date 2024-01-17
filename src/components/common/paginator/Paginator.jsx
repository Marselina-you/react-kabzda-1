import React from 'react';
import s from './Paginator.module.css';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100);
  
  let pages = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push(i);
  }

    return (
        
        <div className={s.page}>
{pages.map( p => {
  return <span key={p} className={props.currentPage === p ? s.selectedPage : undefined }
  onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
})}
</div>

    );
};



export default Paginator;

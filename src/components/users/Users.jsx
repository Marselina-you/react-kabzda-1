import axios from "axios";
//import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import Button from "../button/Button";
import user from "../../assets/images/user.jpg";


class Users extends React.Component {


componentDidMount() {
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
    this.props.setUsers(responce.data.items);
    this.props.setTotalUsersCount(responce.data.totalCount);
   
        
      });
}
onPageChanged = (pageNumber) => {
  this.props.setCurrentPage(pageNumber);
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
    this.props.setUsers(responce.data.items);
   
        
      })
}
render() {
  let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize / 100);
  
  let pages = [];
  for (let i=1; i<= pagesCount; i++) {
    pages.push(i);
  }

      return <div>
        <div className={s.page}>
{pages.map( p => {
  return <span className={this.props.currentPage === p && s.selectedPage }
  onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
})}
</div>
      
      {this.props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.img}>
              <img src={ u.photos.small != null ? u.photos.smal : user} alt="" />
            </div>
            <div>
               
              
              {u.followed 
              ? 
              <Button addMessage={() => {this.props.unfollow(u.id)}} value="unfollow"/>
              : 
              <Button addMessage={() => {this.props.follow(u.id)}} value="follow"/>
             }
            </div>
          </span>
          <span>
            <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
            <span>
            <div>
                    {'u.city'}
                </div>
                <div>
                    {'u.country'}
                </div>
            </span>
          </span>
        </div>
      ))}
    </div>
    }

}

export default Users;
 
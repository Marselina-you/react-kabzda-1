import axios from "axios";
//import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import Button from "../button/Button";
import user from "../../assets/images/user.jpg";


class Users extends React.Component {


componentDidMount() {
  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
    this.props.setUsers(responce.data.items);
        
      });
}
render() {
      return <div>
      <button onClick={this.getUsers}>get users</button>
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
 
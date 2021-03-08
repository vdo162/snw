import React from 'react';
import s from './Users.module.css'
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return <div key={user.id} className={s.users}>
                    <span className={s.avaAndName}>
                        <span>
                            <NavLink to={'/profile/' + user.id}><img
                                src={user.photos.small != null ? user.photos.small : userPhoto}
                                className={s.userPhoto}/></NavLink>
                        </span>
                        <span>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {unfollow(user.id);}}>
                                    Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {follow(user.id);}}>
                                    Follow</button>}
                        </span>
                    </span>
                    <span className={s.data}>
                                <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                </span>
                                <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                                </span>
                    </span>
    </div>
}

export default User;
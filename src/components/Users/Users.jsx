import React from 'react';
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
			<Paginator totalItemsCount={totalUsersCount} 
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChanged={onPageChanged}/>
			<div>
				{
					users.map(u => <User user={u} 
										key={u.id} 
										followingInProgress={props.followingInProgress}
										unfollow={props.unfollow}
										follow={props.follow}/> )
				}
			</div>
        </div>)
}

export default Users;
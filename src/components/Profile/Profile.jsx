import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
	return (
		<div>
			<ProfileInfo savePhoto={props.savePhoto} 
						isOwner = {props.isOwner}
						profile={props.profile}
						status={props.status} 
						updateStatus={props.updateStatus}
						saveProfile={props.saveProfile}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;
import React from 'react';
import bich from "./bich.jpg";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


function ProfileInfo ({profile, status, updateStatus}){
	if (!profile){
		return <Preloader/>
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large}/>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
				<div>Full name: {profile.fullName}</div>
				<div>About me: {profile.aboutMe}</div>
				<div>My job: {profile.lookingForAJobDescription}</div>
			</div>
		</div>
	)
}

export default ProfileInfo;
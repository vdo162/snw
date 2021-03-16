import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";


function ProfileInfo ({profile, status, updateStatus, savePhoto, isOwner, saveProfile}){
	let [editMode, setEditMode] = useState(false);
	
	if (!profile){
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if(e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}
	
	const onSubmit = (formdata) => {
		saveProfile(formdata)
			.then(()=>{
				setEditMode(false);
				})
	}
	
	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
				{isOwner && <div><input type={"file"} onChange={onMainPhotoSelected}/></div>}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} /><br/>
				{editMode
					? <ProfileDataForm onSubmit={onSubmit} profile={profile} initialValues={profile} setEditMode={setEditMode}/>
					: <ProfileData isOwner = {isOwner} profile={profile} goToEditMode={() => {setEditMode(true)} }/>}
			</div>
		</div>
	)
}

export default ProfileInfo;
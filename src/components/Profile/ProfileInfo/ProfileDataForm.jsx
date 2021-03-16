import React from 'react'
import {reduxForm} from 'redux-form'
import {Input, Textarea, createFeild} from "../../common/FormsControls/FormsControls"
import s from '../../common/FormsControls/FormsControls.module.css'

const ProfileForm = ({handleSubmit, error, profile}) => {
	return <form onSubmit={handleSubmit}>
		<div><button>Save</button></div>
		
		{error && <div className={s.formSummaryError}>{error}</div>}
		
		<div>
			<b>Full name</b>: {createFeild('Full name', 'fullName', [], Input)}
		</div>
		<div>
			<b>Loking for a job</b>: {createFeild('', 'lookingForAJob', [], 'input', {type: 'checkbox'})}
		</div>
		<div>
			<b>My professional skills</b>: {createFeild('My professional skills', 'lookingForAJobDescription', [], Textarea)}
		</div>
		<div>
			<b>About me</b>: {createFeild('About me', 'aboutMe', [], Textarea)}
		</div>
		<div>
			<b>Contacts</b>:
				{Object.keys(profile.contacts).map(key => {
					return <div className={s.contact} key={key}><b>{key}</b>:{createFeild(key, 'contacts.' + key, [], Input)}</div>
				})}
		</div>
	</form>
}

export const ProfileDataForm = reduxForm({form: 'edit-profile'})(ProfileForm);
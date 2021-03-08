import React from "react"
import {reduxForm} from 'redux-form'
import {required} from "../../utils/validators/validators";
import {Input, createFeild} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
	return (
			<form onSubmit={handleSubmit}>
				{createFeild('Email', 'email', [required], Input)}
				{createFeild('Password', 'password', [required], Input, {type: 'password'})}
				{error&&<div className={s.formSummaryError}>{error}</div>}
				{createFeild(null, 'rememberMe', [], 'input', {type: 'checkbox'}, ' remember me')}
				<div>
					<p>1 vdo162@gmail.com</p>
					<p>2 G3JhF2rPPJ!wmCv</p>
					<button >Login</button>
				</div>
			</form>
	)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
	const onSubmit = (formdata)=>{
		login(formdata.email, formdata.password, formdata.rememberMe);
	}
	
	if(isAuth) {
		return <Redirect to='/profile'/>
	}
	
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

const mapStateToProps = (state) =>({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);
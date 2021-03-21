import React from "react"
import {reduxForm} from 'redux-form'
import {required} from "../../utils/validators/validators";
import {Input, createFeild} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
	return (
			<form onSubmit={handleSubmit}>
				{createFeild('Email', 'email', [required], Input)}
				{createFeild('Password', 'password', [required], Input, {type: 'password'})}
				{createFeild(null, 'rememberMe', [], 'input', {type: 'checkbox'}, ' remember me')}
				
				{captchaUrl && <img src = {captchaUrl}/>}
				{captchaUrl && createFeild('Symbols from image', 'captcha', [required], Input)}
				
				{error&&<div className={s.formSummaryError}>
					{error}
				</div>}
				<div>
					<button >Login</button>
				</div>
			</form>
	)
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
	const onSubmit = (formdata)=>{
		login(formdata.email, formdata.password, formdata.rememberMe, formdata.captcha);
	}
	
	if(isAuth) {
		return <Redirect to='/profile'/>
	}
	
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
		</div>
	)
}

const mapStateToProps = (state) =>({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);
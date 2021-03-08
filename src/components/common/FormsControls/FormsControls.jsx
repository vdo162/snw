import React from 'react'
import s from './FormsControls.module.css'
import {Field} from 'redux-form'

const FormsControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
		<div className={s.formControl + " " +(hasError ? s.error : "")}>
			<div>
				{children}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const {input, meta, ...restProps} = props;
    return <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
}
export const Input = (props) => {
	const {input, meta, ...restProps} = props;
    return <FormsControl {...props}><input {...input}{...restProps}/></FormsControl>
}

export const createFeild = (placeholder, name, validators, component, props = {}, text = '') => {
	return <div>
				<Field placeholder={placeholder} name={name} 
						validate={validators}
						component={component} 
						{...props}/> {text}
			</div>
}

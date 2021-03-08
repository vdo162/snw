import s from './../Dialogs.module.css'

function Message (props) {
	let status;
	if (props.whoSays=='I'){
		status = s.I;
	} else{
		status = s.friend;
	}
	return (
		<div className={`${s.message} ${status}`}>{props.message}</div>

	)
}

export default Message;
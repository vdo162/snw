import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import logo from './ava.jpg'

function DialogItem (props) {
	let path = '/dialogs/' + props.id;
	
	return (
			<div className={s.dialog + ' ' + s.active}>
				<img src={logo}/>
				<div>
					<NavLink to={path}>{props.name}</NavLink>
				</div>
			</div>
	)
}

export default DialogItem;
import logo from "../../company.png";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return <header className={s.header}>
        <img src={logo}/>
		<div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
		</div>
    </header>
}

export default Header;
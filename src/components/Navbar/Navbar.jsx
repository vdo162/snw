import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		sidebar: state.sidebar
	}
}

let mapDispatchToProps = () => {
	return {

	}

}

const Navbar = connect(mapStateToProps,mapDispatchToProps)((props)=> {
			let state = props.sidebar;
			
			let friends = state.friends.map(f => <Friend name={f.name} key={f.id}/>);

			return <nav className={s.nav}>
				<div className={s.item}>
					<NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
				</div>
				<div className={s.friends}>
					<h2>Friends</h2>
					{friends}
				</div>
			</nav>
		})

export default Navbar;
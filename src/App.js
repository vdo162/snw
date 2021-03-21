import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {HashRouter, Route, withRouter, Redirect, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login"
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspence} from "./hoc/withSuspence";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
	catchAllUnhandledError = (error) => {
		alert('Не обработанный промис, позор программисту! \n' + error.reason);
	}
	
    componentDidMount(props) {
        this.props.initializeApp();
		window.addEventListener('unhandledrejection',this.catchAllUnhandledError);
    }
	
    componentWillUnmount(props) {
		window.removeEventListener('unhandledrejection',this.catchAllUnhandledError);
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
				<Switch>
					<Route exact path='/'
                           render={()=> <Redirect to='/profile'/>}/>
				    <Route path='/dialogs'
                           render={withSuspence(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspence(ProfileContainer)}/>
                    <Route path='/users'
                           render={withSuspence(UsersContainer)}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
					<Route path='/login/vk'
                           render={() => <div>Login for VK</div>}/> 
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
					<Route path='*'
                           render={() => <div>404 Not found</div>}/> 						   
					</Switch>
				</div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
	withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainApp;
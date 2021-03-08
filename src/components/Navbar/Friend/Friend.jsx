import s from './Friend.module.css';
import logo from './ava.jpg'

function Friend (props){
    return (
        <div className={s.friend}>
            <img src={logo}/>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;
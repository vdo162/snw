import s from './Post.module.css';
import logo from '../../../Navbar/Friend/ava.jpg'

function Post(props) {
    return <div className={s.item}>
        <img src={logo}/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;
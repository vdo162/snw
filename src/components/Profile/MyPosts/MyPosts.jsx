import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators";

let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} 
				validate={[required, maxLength10]} 
				placeholder={'New post...'}/>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'newpost'})(AddNewPostForm);

function MyPosts(props) {
	let reversProps = [...props.posts].reverse();
    let postsElements = reversProps.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
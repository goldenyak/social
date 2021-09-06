import React, {LegacyRef, RefObject} from "react";
import add from './AddPosts.module.css';
import {rerenderEntireTree} from "../../render";

// export type AddPostsPropsType = {
//     title: string
//     addPost: (text: string) => void
// }

export function AddPosts(props: any) {

    let addNewPost: RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        debugger
        if (addNewPost.current) {
            let text = addNewPost.current.value
            props.addPost(text)
            addNewPost.current.value = '';
        }
    }

    return (
        <div className={add.main_wrapper}>
            <textarea className={add.textarea} ref={addNewPost} placeholder='Введите ваше сообщение' value={props.newPostText}/>
            <button className={add.button} onClick={addPost}> Отправить</button>
        </div>
    )
}


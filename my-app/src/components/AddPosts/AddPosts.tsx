import React, {LegacyRef, RefObject} from "react";
import add from './AddPosts.module.css';
import {rerenderEntireTree} from "../../render";

// export type AddPostsPropsType = {
//     title: string
//     addPost: (text: string) => void
// }

export function AddPosts(props: any) {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = '';
        }
    }

    let onPostChange = () => {

        // @ts-ignore
        let text = newPostElement.current.value
        console.log(text)
    }

    return (
        <div className={add.main_wrapper}>
            <textarea className={add.textarea} onChange={onPostChange} ref={newPostElement} placeholder='Введите ваше сообщение' value='it-kamasutra'/>
            <button className={add.button} onClick={addPost}> Отправить</button>
        </div>
    )
}


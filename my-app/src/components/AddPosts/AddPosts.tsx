import React, {LegacyRef, RefObject} from "react";
import add from './AddPosts.module.css';

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
        }
    }

    return (
        <div className={add.main_wrapper}>
            <textarea className={add.textarea} ref={addNewPost} placeholder='Введите ваше сообщение'></textarea>
            <button className={add.button} onClick={addPost}> Отправить</button>
        </div>
    )
}


import React, {LegacyRef, RefObject} from "react";
import add from './AddPosts.module.css';


// export type AddPostsPropsType = {
//     title: string
//     addPost: (text: string) => void
// }

export function AddPosts(props: any) {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = '';
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
            props.updateNewPostText('')

        }
    }

    return (
        <div className={add.main_wrapper}>
            <textarea className={add.textarea} onChange={onPostChange} ref={newPostElement}
                      placeholder='Введите ваше сообщение' value={props.newPostText}/>
            <button className={add.button} onClick={addPost}> Отправить</button>
        </div>
    )
}


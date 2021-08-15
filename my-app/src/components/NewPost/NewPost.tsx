import React from "react";
import state from "../../redux/state";
import s from './NewPost.module.css';

export function NewPost(props: any) {

    const newPost = state.posts.map(elem => {
        return (
            <div className={s.post_item} key={elem.id}>
                <span>{elem.message}</span>
                <div>likes {elem.likesCount}</div>
            </div>)
    })

    return (
        <div className={s.main_wrapper}>
            {newPost}
        </div>
    )
}




































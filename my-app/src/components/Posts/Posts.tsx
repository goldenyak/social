import React from 'react';
import Area from '../Area/Area';
import Divider from '../Divider/Divider';
import './Posts.css';
import {updateNewPostText} from "../../redux/state";

export function Posts(props: any) {
    return (
        <div className='posts'>
            <Divider dividerTitle='Последние посты'/>
            <Area addPost={props.addPost}
                  newPostText={props.state.newPostText}
                  updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Posts;
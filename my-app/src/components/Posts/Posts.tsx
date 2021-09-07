import React from 'react';
import Area from '../Area/Area';
import Divider from '../Divider/Divider';
import './Posts.css';

export function Posts(props: any) {
    return (
        <div className='posts'>
            <Divider dividerTitle='Последние посты'/>
            <Area addPost={props.addPost} newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

export default Posts;
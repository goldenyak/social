import React from 'react';
import './Area.css';
import Search from "../Search/Search";
import {AddPosts} from "../AddPosts/AddPosts";
import {NewPost} from "../NewPost/NewPost";

export function Area(props: any) {
    return (
        <div className='area_wrapper'>
            <AddPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            <NewPost addPost={props.addPost}/>
        </div>
    )
}


export default Area;

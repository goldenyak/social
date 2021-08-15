import React from 'react';
import './Area.css';
import Search from "../Search/Search";
import {AddPosts} from "../AddPosts/AddPosts";
import {NewPost} from "../NewPost/NewPost";

export function Area(props: any) {
    return (
        <div className='area_wrapper'>
            <AddPosts title={'Просто заглушка для типизации'} addPost={props.addPost}/>
            <NewPost addPost={props.addPost}/>
        </div>
    )
}


export default Area;

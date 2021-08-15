import React from 'react';
import Area from '../Area/Area';
import Divider from '../Divider/Divider';
import './Posts.css';

export function Posts(props: any) {
    return (
        <div className='posts'>
            <Divider title='Последние посты'/>
            <Area addPost={props.addPost}/>
        </div>
    )
}

export default Posts;
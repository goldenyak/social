import React from 'react';
import './Search.css';


type SearchPropsType = {
    title: string
}

export function Search(props: SearchPropsType) {
    return (
      <form className = 'search'>
        <input type="text" placeholder="Поиск"/>
        <input type="button" value={props.title}/>
      </form>
    )};

export default Search;
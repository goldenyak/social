import {rerenderEntireTree} from "../render";

export type DialogsPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
    id: number
}

let state = {
    posts: [
        {id: 1, message: 'Привет, как дела?', likesCount: 5},
        {id: 2, message: 'Меня зовут Егор', likesCount: 7},
        {id: 3, message: 'Мне 33 года', likesCount: 9},
    ],
    dialogs: [
        {id: 1, name: 'Василий'},
        {id: 2, name: 'Александр'},
        {id: 3, name: 'Тимофей'},
        {id: 4, name: 'Дмитрий'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ]
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.posts.push(newPost)
    rerenderEntireTree()
}

export default state;


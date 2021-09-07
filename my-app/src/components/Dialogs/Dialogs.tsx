import React from 'react';
import d from './Dialogs.module.css';
import Divider from "../Divider/Divider";
import {DialogItem} from './DiallogItem/DialogItem';
import Message from "./Message/Messages";
import {DialogsPropsType} from "../../redux/state";
import state from "../../redux/state";


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={d.mes}>
            <Divider dividerTitle={'Сообщения'}/>
            <div className={d.wrapper}>
                <div className={d.users}>
                    {dialogsElements}
                </div>
                <div className={d.divider}>
                </div>
                <div className={d.dialog}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
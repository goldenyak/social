import React from 'react';
import { isPropertySignature } from 'typescript';
import './Divider.css';

type DividerPropsType = {
    title: string
}

export function Divider(props: DividerPropsType) {
    return (
      <div className = 'divider'>
          {props.title}
      </div>
    )};

    export default Divider;


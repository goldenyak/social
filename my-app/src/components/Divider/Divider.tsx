import React from 'react';
import { isPropertySignature } from 'typescript';
import './Divider.css';

type DividerPropsType = {
    dividerTitle: string
}

export function Divider(props: DividerPropsType) {
    return (
      <div className = 'divider'>
          {props.dividerTitle}
      </div>
    )};

    export default Divider;


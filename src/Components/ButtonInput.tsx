import React from 'react';

export type ButtonInputType = {
    name:string
    callBack:()=> void
}

export const ButtonInput = ({name,callBack}:ButtonInputType) => {

    const onClickHandlerButton =() => {
        callBack()
    }

    return (
        <button onClick={onClickHandlerButton}>{name}</button>
    );
};
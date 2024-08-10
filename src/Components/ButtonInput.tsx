import React from 'react';

type ButtonInputType = {
    name:string
    callBack:()=>void
}

export const ButtonInput = ({name,callBack}:ButtonInputType) => {

    const onClickButtonHandler = () => {
        callBack();
    }

    return (
        <div>
            <button onClick={onClickButtonHandler}>{name}</button>
        </div>
    );
};
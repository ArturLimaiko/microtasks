import React from 'react';

type InputType = {
    setTitle:(title:string)=>void,
    title:string
}

export const Input = ({setTitle,title}:InputType) => {

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        console.log(title);
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
        </div>
    );
};
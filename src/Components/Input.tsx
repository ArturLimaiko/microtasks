import React from 'react';

export type InputType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = ({setTitle, title}: InputType) => {

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title} />
        </div>
    );
};
import React, {useState} from 'react';

export type FullInputType = {
    addMessage: (title: string) => void;
}

export const FullInput = ({addMessage}: FullInputType) => {

    let [title,setTitle] = useState('');

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        console.log(title);
    }

    const onClickHandlerButton =() => {
        addMessage(title)
        setTitle('');
    }

    return (
        <div>
            <input value={title} placeholder={'Enter Message'} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandlerButton}>Add Message</button>
        </div>
    );
};
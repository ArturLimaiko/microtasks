import React from 'react';
import {Body} from './Components/Body';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {NewComponents} from "./Components/NewComponents";

const students = [
    {id: 1, name: 'Student 1', age: 23},
    {id: 2, name: 'Student 56', age: 22},
    {id: 3, name: 'Student 121', age: 19},
    {id: 4, name: 'Student 11', age: 18},
    {id: 5, name: 'Student 23', age: 22},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (number: number) => {
        console.log(number)
    }

    return (
        <div className="App">
            <Header HeaderTitle={'Header'}/>
            <Body description={'This is a description'}/>
            <Footer FooterTitle={'Footer'}/>
            <NewComponents students={students} cars={topCars}/>


            <button onClick={() => onClickHandler('name 1')}>Button 1</button>
            <button onClick={() => onClickHandler('name 2')}>Button 2</button>


            <button onClick={foo1}>foo1</button>
            <button onClick={()=>foo2(100200)}>foo2</button>
        </div>
    );
}

export default App;

// создать две кнопки внутрь кнопок передать функции как вариант законсолить просто что нибудь
// в параметрах функций прописать типизацию
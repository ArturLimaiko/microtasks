import React from 'react';
import {Body} from './Components/Body';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {NewComponents} from "./Components/NewComponents";
import {Button} from "./Components/Button";

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

const Foo1 = (age:number ,description:string) => {
    console.log(age,description);
}

const Foo2 = (description:string) => {
    console.log(description)
}

const Foo3 = () => {
    console.log('Im stupid button')
}

function App() {
    return (
        <div className="App">
            <Header HeaderTitle={'Header'}/>
            <Body description={'This is a description'}/>
            <Footer FooterTitle={'Footer'}/>
            <NewComponents students={students} cars={topCars}/>
            <Button name={'Button One'} callBack={()=> Foo1(23,'description on Button One')}/>
            <Button name={'Button Two'} callBack={() => Foo2 ('some description on Button Two')}/>
            <Button name={'stupid button'} callBack={Foo3}/>
        </div>
    );
}

export default App;

// создать две кнопки внутрь кнопок передать функции как вариант законсолить просто что нибудь
// в параметрах функций прописать типизацию
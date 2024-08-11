import React, {useState} from 'react';
import {Body} from './Components/Body';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {NewComponents} from "./Components/NewComponents";
import {Button} from "./Components/Button";
// import {FullInput} from './Components/FullInput';
import {Input} from "./Components/Input";
import {ButtonInput} from "./Components/ButtonInput";

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

const Foo1 = (age: number, description: string) => {
    console.log(age, description);
}

const Foo2 = (description: string) => {
    console.log(description)
}

const Foo3 = () => {
    console.log('Im stupid button')
}

type FilterType = 'All' | 'RUBLS' | 'Dollars'


function App() {
//     state for universal button----------------------------------------------------------------------------------------
    let [a, setA] = useState(1);
    const Foo4 = () => {
        ++a;
        setA(a);
        console.log(a)
    }
    const reset = () => {
        setA(0);
    }
// //----------------------------------------------------------------------------------------------------------------------
    //state message for Input
    let [message, setMessage] = useState(
        [
            {message: 'message 1'},
            {message: 'message 2'},
            {message: 'message 3'}
        ]
    );
    //function callBack for button input
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message]);
    }
//----------------------------------------------------------------------------------------------------------------------
// тут будет локальный стейт с тайтлом + сюда нужно будет закинуть функцию колбек
// которая внутри вызывает addMessage и после очищает инпут
    let [title, setTitle] = useState('');

    const callBackHandler = () => {
        addMessage(title)
        setTitle('')
    }

//----------------------------------------------------------------------------------------------------------------------
//    method filter
    // отмапить массив с money
    // создать 3 кнопки и к каждой создать функцию с помощью которой будем переключать значение
    // создать рандомную переменную и ей присвоить значение money(создали копию тем самым)
    //  создать локальный стейт с фильтром денег + протипизировать его
    // создать условие если доллары - то показывай доллары и тд
    // создать функцию которая при клике будет сетать значение в зависимости от выбранного фильтра
    // в эту функцию пробросить значения которые в типизации

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money;

    const [filter , setFilter] = useState<FilterType>('All')

    if(filter === 'Dollars'){
        currentMoney = money.filter( filteredMoney => filteredMoney.banknots === 'Dollars')
    }

    if(filter === 'RUBLS'){
        currentMoney = money.filter( filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickHandler = (filter:FilterType) => {
        setFilter(filter)
    }

//----------------------------------------------------------------------------------------------------------------------
    return (
        <div className="App">
            <Header HeaderTitle={'Header'}/>
            <Body description={'This is a description'}/>
            <Footer FooterTitle={'Footer'}/>
            <NewComponents students={students} cars={topCars}/>
            <Button name={'Button One'} callBack={() => Foo1(23, 'description on Button One')}/>
            <Button name={'Button Two'} callBack={() => Foo2('some description on Button Two')}/>
            <Button name={'stupid button'} callBack={Foo3}/>

            <div>
                <h1>{a}</h1>
                <Button name={'increment'} callBack={Foo4}/>
                <Button name={'reset'} callBack={reset}/>
            </div>
            <hr/>

            {/*uncomment for FullInput*/}
            {/*<div>*/}
            {/*    <Header HeaderTitle={'Microtasks Input Lesson'}/>*/}
            {/*    <FullInput addMessage={addMessage}/>*/}
            {/*    <div>*/}
            {/*        {message.map((m, index) => {*/}
            {/*            return (*/}
            {/*                <div key={index}>{m.message}</div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <>
                <h1>Microtasks Input & button</h1>
                <ButtonInput name={'ADD'} callBack={callBackHandler}/>
                <Input setTitle={setTitle} title={title}/>
                <div>
                    {message.map((m, index) => {
                        return (
                            <div key={index}>{m.message}</div>
                        )
                    })}
                </div>
            </>

            <>
                <h1>Filtered Money</h1>
                <div>
                    <ul>
                        {currentMoney.map((m, index) => {
                            return (
                                <li key={index}>
                                    <span> {m.value} </span>
                                    <span> {m.banknots} </span>
                                    <span> {m.number} </span>
                                </li>
                            )
                        })}
                    </ul>
                    <div style={{display: 'flex', gap: '30px', padding: '30px'}}>
                        <button onClick={() => onClickHandler('All')} >All</button>
                        <button onClick={() => onClickHandler('RUBLS')} >rubles</button>
                        <button onClick={() => onClickHandler('Dollars')} >dollars</button>
                    </div>

                </div>
            </>
        </div>
    );
}

export default App;
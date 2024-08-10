import React, {useState} from 'react';
import {Body} from './Components/Body';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {NewComponents} from "./Components/NewComponents";
import {Button} from "./Components/Button";
import {FullInput} from './Components/FullInput';

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


function App() {
    //state for universal button
    let [a, setA] = useState(1);
    const Foo4 = () => {
        ++a;
        setA(a);
        console.log(a)
    }
    const reset = () => {
        setA(0);
    }

    //state message for Input
    let [message, setMessage] = useState(
        [
            {message: 'message 1'},
            {message: 'message 2'},
            {message: 'message 3'}
        ]
    );

    //function callBack for button input
    const addMessage = (title:string) => {
        let newMessage = {message:title}
        setMessage([newMessage,...message]);
    }

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
            <div>
                <Header HeaderTitle={'Microtasks Input Lesson'}/>
                <FullInput addMessage={addMessage}/>
                <div>
                    {message.map((m, index) => {
                        return (
                            <div key={index}>{m.message}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;

// создать стейт с месседжами [message, setMessage]=useState('')как вариант где нибудь 3-4 объекта
// создать инпут и кнопку и отрисовать + отрисовать сообщения которые в стейте ( через мап)
// создать универсальный инпут( FullInput)
// внутри будет локальный стейст который будет сохранять введенное значение [title, setTitle] = useState('')
// инпуту и кнопке создадим по функции и в параметрах укажем event(протипизировать) onChangeInputHandler...OnClick...
// внутри функции пропишем currentTarget.value + нам нужно записать все в локальный стейт - setTitle
// по нажатию на кнопку у нас должна прозвониться функция которую мы создадим в app
// -  создадим там функцию(пустую) addMessage(){} и прокинем ее в копмоненту инпут и протипизируем
// OnClick вызываем кладем туда addMessage() внутрь передадим title и так же не забудем протипизировать
// далее нужно засетать title  и не забыть про старые сообщения
// очистим поле ввода в инпуте - нужно привязать title к value input'a
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

function App() {
    return (
        <div className="App">
            <Header HeaderTitle={'Header'}/>
            <Body description={'This is a description'}/>
            <Footer FooterTitle={'Footer'}/>
            <NewComponents students={students}/>
        </div>
    );
}

export default App;

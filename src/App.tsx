import React from 'react';
import { Body } from './Components/Body';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header HeaderTitle={'Header'}/>
      <Body description={'This is a description'} />
      <Footer FooterTitle={'Footer'}/>
    </div>
  );
}

export default App;

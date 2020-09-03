import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { DemoButton } from './components/DemoButton/DemoButton';
import { Button } from 'antd';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Praktyki!</h1>
        <img width={40} alt="" src={logo} />
      </header>
      <hr />
      Komponent testowy:
      <div>
        <DemoButton>This is a test!</DemoButton>
      </div>
      <hr />
      Komponenty antd:
      <div>
        <Button>Antd Button</Button>
      </div>
    </div>
  );
};

export default App;

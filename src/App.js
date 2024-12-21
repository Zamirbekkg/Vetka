// src/App.js
import React from 'react';
import Header from './components/header';
import Button from './components/button';
import Content from './components/content';

function App() {
  const handleClick = () => alert('Кнопка нажата!');
  
  return (
    <div className="App">
      <Header />
      <Button label="Нажми меня" onClick={handleClick} />
      <Content />
    </div>
  );
}

export default App;

// App.tsx
import React from 'react';
import Header from './components/Header';
import Button from './components/Buttom';

import Counter from './components/Counter';
import List from './components/List';
import Form from './components/Form';
import './App.css'


const App: React.FC = () => {
  const handleButtonClick = () => {
    alert('Botão clicado!');
  };

  const items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header />
      <Button label="Clique aqui" onClick={handleButtonClick} />
      <Counter />
      <List items={items} />
      <Form />
    </div>
  );
};

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Message } from './types';
import { useAppSelector, useAppDispatch } from './store/store';
import { AddMessageActon } from './store/actions';
import { selectMessages } from './store/selectors';

function App() {
  const { messages } = useAppSelector(selectMessages);

  const dispatch = useAppDispatch();

  const addMessage = (message: Message) => {
    dispatch(AddMessageActon(message));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button
          onClick={() =>
            addMessage({
              id: 'm1',
              level: 'info',
              text: 'info',
            })
          }>
          Add
        </button>

        {messages.map((el) => (
          <p>{el.text}</p>
        ))}
      </header>
    </div>
  );
}

export default App;

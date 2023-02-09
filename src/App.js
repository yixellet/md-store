import React from 'react';

import Map from './features/Map/Map';

import './App.css';
import Tools from './features/Tools/Tools';
import CounterpartiesList from './features/ModalWindow/CounterpartiesList/CounterpartiesList';
import { useSelector } from 'react-redux';

function App() {

  const modalIsOpen = useSelector(state => state.app.modalWindowIsOpen);
  return (
    <>
      <Map />
      <Tools />
      {
        modalIsOpen && <CounterpartiesList />
      }
     
    </>
  );
}

export default App;

import React from 'react';

import Map from './features/Map/Map';

import './App.css';
import { useSelector } from 'react-redux';
import List from './features/Counterparties/List/List';
import MainPanel from './features/MainPanel/MainPanel';

function App() {

  const modalIsOpen = useSelector(state => state.app.modalWindowIsOpen);
  return (
    <>
      <Map />
      <MainPanel />
      {
        modalIsOpen && <List />
      }
     
    </>
  );
}

export default App;

import React from 'react';

import Map from './features/Map/Map';

import './App.css';
import { useSelector } from 'react-redux';
import MainPanel from './features/MainPanel/MainPanel';
import NewRecordForm from './features/NewRecordForm/NewRecordForm';

function App() {

  const openNewRecordWindow = useSelector(state => state.app.newRecord.modalWindowIsOpen);

  return (
    <>
      <Map />
      <MainPanel />
      {
        openNewRecordWindow && <NewRecordForm />
      }
     
    </>
  );
}

export default App;

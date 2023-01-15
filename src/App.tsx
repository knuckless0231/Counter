import React from 'react';
import './App.css';
import {Containeer} from "./Components/Counter/Containeer";
import s from './App.module.css'

function App() {
  return (
      <div className={s.mainContent}>
      <Containeer />
      </div>
  );
}

export default App;

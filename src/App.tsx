import React from 'react';
import './App.css';
import {Containeer} from "./Components/Counter/Containeer";
import s from './App.module.css'

function App() {
  return (
      <div className={s.mainContent}>
    <div className={s.containeer}>
      <Containeer />
    </div>
      </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {

  const [val0, setVal0] = useState("");
  const [val1, setVal1] = useState("");

  function wc(val: string) {
    return val.split(' ').filter(Boolean).length;
  }

  return (
    <div className="App">
      <header className="App-header">
      <input
          onChange={ (event) => {
            setVal0(event.target.value);
            event.preventDefault();
          }}
        value={val0}
        />
        {wc(val0)} Word(s)
        <input
          onChange={ (event) => {
            setVal1(event.target.value);
            event.preventDefault();
          }}
        value={val1}
        />
        {wc(val1)} Word(s)


        <br/>
        <br/>
        {val0 === val1 ? 'Same' : 'Different'}
      </header>
    </div>
  );
}

export default App;

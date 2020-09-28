import React from 'react';
import './App.css';
import SeasonList from './components/seasonList/seasonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button label="click me!"></Button> */}
        <SeasonList></SeasonList>
      </header>
    </div>
  );
}

export default App;

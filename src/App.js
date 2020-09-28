import React from 'react';
import './App.css';
import SeasonList from './components/SeasonList/SeasonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button label="click me!"></Button> */}
        <SeasonList data-testid="food_list"></SeasonList>
      </header>
    </div>
  );
}

export default App;

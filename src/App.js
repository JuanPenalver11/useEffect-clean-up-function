import WindowTracker from './component/WindowTracker';
import React, {useState} from 'react';
import './App.css';

function App() {

  const[show, setShow] = useState(true)
  
  function handleClick(){
    setShow(prevShow => !prevShow)
  }


  return (
    <div className="App">
      <button onClick={handleClick}>{show ? "Hide" : "Display"} window tracker</button>

      { show && <WindowTracker />}
      
    </div>
  );
}

export default App;

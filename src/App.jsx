import { useState, useEffect } from 'react';
import CharacterApp from './CharacterApp';
import StatApp from './StatApp';
import './App.css';
function App() {
  const [unitDisplay, setUnitDisplay] = useState(true);
  function toggleDisplay() {
    setUnitDisplay(!unitDisplay);
  }
  return (
  <div>
    <div id="togglestatpersonal">
      <button onClick={toggleDisplay}>Toggle Character Info and Unit Info</button>
    </div>
    <div style={unitDisplay ? {display: "block"} : {display: "none"}}>
      <CharacterApp showOrHide={unitDisplay}/>
    </div>
    <div style={!unitDisplay ? {display: "block"} : {display: "none"}}>
      <StatApp showOrHide={unitDisplay}/>
    </div>
  </div>
  )
}

export default App;
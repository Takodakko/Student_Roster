import { useState, useEffect } from 'react';
import CharacterApp from './CharacterApp';
import StatApp from './StatApp';

function App() {
  const [unitDisplay, setUnitDisplay] = useState(true);
  function toggleDisplay() {
    setUnitDisplay(!unitDisplay);
  }
  return (
  <div>
    <button onClick={toggleDisplay}>Toggle Character Info and Unit Info</button>
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
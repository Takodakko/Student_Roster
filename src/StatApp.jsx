import { useState, useEffect } from 'react';
import UnitProfile from './UnitProfile.jsx';
import './StatApp.css';

function StatApp() {
  const [unitData, setUnitData] = useState([]);
  useEffect(() => {fetch('src/unitlist.json')
  .then((data) => {
    return (data.json())})
  .then((data) => {
      return setUnitData(data.unitlist)})}, []);
  
  const [specialOrder, setSpecialOrder] = useState(false);
  
  function toggleOrder(property, event) {
    const columnName = event.target.parentElement.className;
    const currentColumn = document.querySelectorAll('.' + columnName);
    const allColumns = document.querySelectorAll('td');
    const allHeaders = document.querySelectorAll('th');
    allColumns.forEach((el) => el.style.border = '1px solid black');
    allHeaders.forEach((el) => el.style.border = '1px solid black');
    currentColumn.forEach((el) => el.style.border = '3px solid black');
    if (!specialOrder) {
      const unitCopy = [...unitData].sort((a, b) => {
        return (a[property] < b[property]) ? -1 : 1;
      });
      setUnitData(unitCopy);
      setSpecialOrder(!specialOrder)
    } else {
      const unitCopy = [...unitData].sort((a, b) => {
        return (a[property] > b[property]) ? -1 : 1;
      });
      setUnitData(unitCopy);
      setSpecialOrder(!specialOrder);
    }
  }
  
  return (
    <div>
      <div>Base stats for pre-promotes DO NOT include class bonuses. Cyril's growth rates have been adjusted to account for his personal skill.</div>
      <table id="unitgrid"><thead><tr id="trheader"><th className="face-column"><button onClick={(e) => toggleOrder('id', e)}>Picture</button></th><th className="name-column"><button onClick={(e) => toggleOrder('name', e)}>Name</button></th><th className="class-column"><button onClick={(e) => toggleOrder('startingClass', e)}>Base Class</button></th><th className="level-column"><button onClick={(e) => toggleOrder('startingLevel', e)}>Base Level</button></th><th className="basehp-column"><button onClick={(e) => toggleOrder('startingHP', e)}>Base HP</button></th><th className="basestr-column"><button onClick={(e) => toggleOrder('startingStr', e)}>Base Str</button></th><th className="basemag-column"><button onClick={(e) => toggleOrder('startingMag', e)}>Base Mag</button></th><th className="basedex-column"><button onClick={(e) => toggleOrder('startingDex', e)}>Base Dex</button></th><th className="basespd-column"><button onClick={(e) => toggleOrder('startingSpd', e)}>Base Spd</button></th><th className="baselck-column"><button onClick={(e) => toggleOrder('startingLck', e)}>Base Lck</button></th><th className="basedef-column"><button onClick={(e) => toggleOrder('startingDef', e)}>Base Def</button></th><th className="baseres-column"><button onClick={(e) => toggleOrder('startingRes', e)}>Base Res</button></th><th className="basecha-column"><button onClick={(e) => toggleOrder('startingCha', e)}>Base Cha</button></th><th className="growthhp-column"><button onClick={(e) => toggleOrder('growthHP', e)}>HP Growth</button></th><th className="growthstr-column"><button onClick={(e) => toggleOrder('growthStr', e)}>Str Growth</button></th><th className="growthmag-column"><button onClick={(e) => toggleOrder('growthMag', e)}>Mag Growth</button></th><th className="growthdex-column"><button onClick={(e) => toggleOrder('growthDex', e)}>Dex Growth</button></th><th className="growthspd-column"><button onClick={(e) => toggleOrder('growthSpd', e)}>Spd Growth</button></th><th className="growthlck-column"><button onClick={(e) => toggleOrder('growthLck', e)}>Lck Growth</button></th><th className="growthdef-column"><button onClick={(e) => toggleOrder('growthDef', e)}>Def Growth</button></th><th className="growthres-column"><button onClick={(e) => toggleOrder('growthRes', e)}>Res Growth</button></th><th className="growthcha-column"><button onClick={(e) => toggleOrder('growthCha', e)}>Cha Growth</button></th></tr></thead>{unitData.map((unit) => {
        return <UnitProfile key={unit.id} id={unit.id} name={unit.name} face={unit.face} startinglevel={unit.startingLevel} startingclass={unit.startingClass} startinghp={unit.startingHP} startingstr={unit.startingStr} startingmag={unit.startingMag} startingdex={unit.startingDex} startingspd={unit.startingSpd} startinglck={unit.startingLck} startingdef={unit.startingDef} startingres={unit.startingRes} startingcha={unit.startingCha} growthhp={unit.growthHP} growthstr={unit.growthStr} growthmag={unit.growthMag} growthdex={unit.growthDex} growthspd={unit.growthSpd} growthlck={unit.growthLck} growthdef={unit.growthDef} growthres={unit.growthRes} growthcha={unit.growthCha} house={unit.house}/>
      })}
      
      </table>
    </div>
  )
}

export default StatApp;
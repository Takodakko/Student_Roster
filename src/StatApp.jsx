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

  function toggleOrder(property) {
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
      <table id="unitgrid"> <tr id="trheader"><th><button onClick={() => toggleOrder('id')}>Picture</button></th><th><button onClick={() => toggleOrder('name')}>Name</button></th><th><button onClick={() => toggleOrder('startingClass')}>Base Class</button></th><th><button onClick={() => toggleOrder('startingLevel')}>Base Level</button></th><th><button onClick={() => toggleOrder('startingHP')}>Base HP</button></th><th><button onClick={() => toggleOrder('startingStr')}>Base Str</button></th><th><button onClick={() => toggleOrder('startingMag')}>Base Mag</button></th><th><button onClick={() => toggleOrder('startingDex')}>Base Dex</button></th><th><button onClick={() => toggleOrder('startingSpd')}>Base Spd</button></th><th><button onClick={() => toggleOrder('startingLck')}>Base Lck</button></th><th><button onClick={() => toggleOrder('startingDef')}>Base Def</button></th><th><button onClick={() => toggleOrder('startingRes')}>Base Res</button></th><th><button onClick={() => toggleOrder('startingCha')}>Base Cha</button></th><th><button onClick={() => toggleOrder('growthHP')}>HP Growth</button></th><th><button onClick={() => toggleOrder('growthStr')}>Str Growth</button></th><th><button onClick={() => toggleOrder('growthMag')}>Mag Growth</button></th><th><button onClick={() => toggleOrder('growthDex')}>Dex Growth</button></th><th><button onClick={() => toggleOrder('growthSpd')}>Spd Growth</button></th><th><button onClick={() => toggleOrder('growthLck')}>Lck Growth</button></th><th><button onClick={() => toggleOrder('growthDef')}>Def Growth</button></th><th><button onClick={() => toggleOrder('growthRes')}>Res Growth</button></th><th><button onClick={() => toggleOrder('growthCha')}>Cha Growth</button></th></tr> {unitData.map((unit) => {
        return <UnitProfile key={unit.id} id={unit.id} name={unit.name} face={unit.face} startinglevel={unit.startingLevel} startingclass={unit.startingClass} startinghp={unit.startingHP} startingstr={unit.startingStr} startingmag={unit.startingMag} startingdex={unit.startingDex} startingspd={unit.startingSpd} startinglck={unit.startingLck} startingdef={unit.startingDef} startingres={unit.startingRes} startingcha={unit.startingCha} growthhp={unit.growthHP} growthstr={unit.growthStr} growthmag={unit.growthMag} growthdex={unit.growthDex} growthspd={unit.growthSpd} growthlck={unit.growthLck} growthdef={unit.growthDef} growthres={unit.growthRes} growthcha={unit.growthCha} house={unit.house}/>
      })}
      
      </table>
    </div>
  )
}

export default StatApp;
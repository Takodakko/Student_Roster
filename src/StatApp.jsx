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

  return (
    <div>
      <table id="unitgrid"> <tr id="trheader"><th>Picture</th><th>Name</th><th>Base Class</th><th>Base Level</th><th>Base HP</th><th>Base Str</th><th>Base Mag</th><th>Base Dex</th><th>Base Spd</th><th>Base Lck</th><th>Base Def</th><th>Base Res</th><th>Base Cha</th><th>HP Growth</th><th>Str Growth</th><th>Mag Growth</th><th>Dex Growth</th><th>Spd Growth</th><th>Lck Growth</th><th>Def Growth</th><th>Res Growth</th><th>Cha Growth</th></tr> {unitData.map((unit) => {
        return <UnitProfile key={unit.id} id={unit.id} name={unit.name} face={unit.face} startinglevel={unit.startingLevel} startingclass={unit.startingClass} startinghp={unit.startingHP} startingstr={unit.startingStr} startingmag={unit.startingMag} startingdex={unit.startingDex} startingspd={unit.startingSpd} startinglck={unit.startingLck} startingdef={unit.startingDef} startingres={unit.startingRes} startingcha={unit.startingCha} growthhp={unit.growthHP} growthstr={unit.growthStr} growthmag={unit.growthMag} growthdex={unit.growthDex} growthspd={unit.growthSpd} growthlck={unit.growthLck} growthdef={unit.growthDef} growthres={unit.growthRes} growthcha={unit.growthCha} house={unit.house}/>
      })}
      
      </table>
    </div>
  )
}

export default StatApp;
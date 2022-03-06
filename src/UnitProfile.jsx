import './UnitProfile.css';
function UnitProfile(props) {
  let backColor;
  if (props.house === "Garreg Mach") {
    backColor = ["whiterow", "beigerow"];
  } else if (props.house === "Black Eagles") {
    backColor = ["pinkrow", "redrow"];
  } else if (props.house === "Blue Lions") {
    backColor = ["lightbluerow", "bluerow"];
  } else if (props.house === "Golden Deer") {
    backColor = ["wheatrow", "yellowrow"];
  } else {
    backColor = ["lightgrayrow", "grayrow"];
  }
  return (
    <tr className={props.id % 2 === 0 ? backColor[0] : backColor[1]}><td><img src={props.face} height="40px" width="40px"></img></td><td>{props.name}</td> <td>{props.startingclass}</td> <td>{props.startinglevel}</td> <td>{props.startinghp}</td><td>{props.startingstr}</td><td>{props.startingmag}</td><td>{props.startingdex}</td><td>{props.startingspd}</td><td>{props.startinglck}</td><td>{props.startingdef}</td><td>{props.startingres}</td><td>{props.startingcha}</td><td>{props.growthhp}%</td><td>{props.growthstr}%</td><td>{props.growthmag}%</td><td>{props.growthdex}%</td><td>{props.growthspd}%</td><td>{props.growthlck}%</td><td>{props.growthdef}%</td><td>{props.growthres}%</td><td>{props.growthcha}%</td></tr>
  )
};

export default UnitProfile;
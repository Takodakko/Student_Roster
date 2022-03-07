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
    <tr className={props.id % 2 === 0 ? backColor[0] : backColor[1]}><td className="face-column"><img src={props.face} height="40px" width="40px"></img></td><td className="name-column">{props.name}</td> <td className="class-column">{props.startingclass}</td> <td className="level-column">{props.startinglevel}</td> <td className="basehp-column">{props.startinghp}</td><td className="basestr-column">{props.startingstr}</td><td className="basemag-column">{props.startingmag}</td><td className="basedex-column">{props.startingdex}</td><td className="basespd-column">{props.startingspd}</td><td className="baselck-column">{props.startinglck}</td><td className="baselck-column">{props.startingdef}</td><td className="baseres-column">{props.startingres}</td><td className="basecha-column">{props.startingcha}</td><td className="growthhp-column">{props.growthhp}%</td><td className="growthstr-column">{props.growthstr}%</td><td className="growthmag-column">{props.growthmag}%</td><td className="growthdex-column">{props.growthdex}%</td><td className="growthspd-column">{props.growthspd}%</td><td className="growthlck-column">{props.growthlck}%</td><td className="growthdef-column">{props.growthdef}%</td><td className="growthres-column">{props.growthres}%</td><td className="growthcha-column">{props.growthcha}%</td></tr>
  )
};

export default UnitProfile;
import './StudentProfile.css';
import { useState } from 'react';

function StudentProfile(props) {
  const [isShown, setIsShown] = useState(false);
  function showCrestDetails() {
    if (isShown === true) {
      return {visibility: "visible", backgroundColor: props.uniquecolor}
    } else {
      return {visibility: "hidden"}
    }
  }
  const crestIcons = [];
  function getCrestIcon() {
    props.cresticon.forEach((crest) => {
      if (crest.length === 0) {
        return;
      } else {
        crestIcons.push(<img src={crest} height="40px" width="40px" key={crest}></img>);
      }
    })
  }
  getCrestIcon();
  const interests = props.likes.map((like) => {
    return <li key={props.name + like}>{like}</li>
  })
  return (
    <div className="student-box" style={{borderColor: props.uniquecolor}}>
      <div className="name"><strong>Name:</strong> {props.name}</div>
      <img src={props.pic} height="120px" width="120px"></img>
      <div><strong>Age:</strong> {props.age}</div>
      <ul><strong>Interests:</strong> {interests}</ul>
      <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}><strong>Crest:</strong> {props.crest}<div className="crest-effect" style={showCrestDetails()}>{props.crestEffect}<br></br>{crestIcons}</div></div>
    </div>
  )
}
export default StudentProfile;
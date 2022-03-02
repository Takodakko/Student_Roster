import './StudentProfile.css';
import { useState } from 'react';

function StudentProfile(props) {
  const [isShown, setIsShown] = useState(false);
  function showCrestDetails() {
    if (isShown === true) {
      return {visibility: "visible"}
    } else {
      return {visibility: "hidden"}
    }
  }
  const interests = props.likes.map((like) => {
    return <li key={props.name + like}>{like}</li>
  })
  return (
    <div className="student-box">
      <div className="name"><strong>Name:</strong> {props.name}</div>
      <img src={props.pic} height="120px" width="120px"></img>
      <div><strong>Age:</strong> {props.age}</div>
      <ul><strong>Interests:</strong> {interests}</ul>
      <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}><strong>Crest:</strong> {props.crest}<div className="crest-effect" style={showCrestDetails()}>{props.crestEffect}</div></div>
    </div>
  )
}
export default StudentProfile;
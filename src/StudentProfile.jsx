import './StudentProfile.css';

function StudentProfile(props) {
  const interests = props.likes.map((like) => {
    return <li key={props.name + like}>{like}</li>
  })
  return (
    <div>
      <div className="name"><strong>Name:</strong> {props.name}</div>
      <img src={props.pic} height="120px" width="120px"></img>
      <div><strong>Age:</strong> {props.age}</div>
      <ul><strong>Interests:</strong> {interests}</ul>
      <div><strong>Crest:</strong> {props.crest}</div>
    </div>
  )
}
export default StudentProfile;
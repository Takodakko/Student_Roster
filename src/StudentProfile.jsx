function StudentProfile(props) {
  const interests = props.likes.map((like) => {
    return <li key={props.name + like}>{like}</li>
  })
  return (
    <div>
      <div>Name: {props.name}</div>
      <img src={props.pic} height="120px" width="120px"></img>
      <div>Age: {props.age}</div>
      <ul>Interests: {interests}</ul>
      <div>Crest: {props.crest}</div>
    </div>
  )
}
export default StudentProfile;
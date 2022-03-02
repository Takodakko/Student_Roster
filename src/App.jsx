import { useState, useEffect } from 'react'
import './App.css'
import StudentProfile from './StudentProfile.jsx';

function App() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {fetch('src/studentlist.json')
  .then((data) => {
    return (data.json())})
  .then((data) => {
      return setStudentData(data.studentlist)})}, [])
  
  return (
    <div>
    <input type="text" id="name-search" placeholder='type a name'></input>
    {studentData.map((student) => 
      <StudentProfile key={student.id} name={student.name} pic={student.face} age={student.age} likes={student.likes} crest={student.crest} crestEffect={student.crestEffect}/>
    )}
    </div>
    
  )
}

export default App

import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import StudentProfile from './StudentProfile.jsx';

function App() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {fetch('src/studentlist.json')
  .then((data) => {
    return (data.json())})
  .then((data) => {
      return setStudentData(data.studentlist)}), []})
  
  return (
    studentData.map((student) => 
      <StudentProfile key={student.id} name={student.name} pic={student.face} age={student.age} likes={student.likes} crest={student.crest}/>
    )
  
    
  )
}

export default App

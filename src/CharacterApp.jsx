import { useState, useEffect } from 'react'
import './CharacterApp.css'
import StudentProfile from './StudentProfile.jsx';

function CharacterApp(props) {
  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [searchedName, setSearchedName] = useState('');
  const [teacherList, setTeacherList] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('See Teachers');
  
  function switchLists() {
    setTeacherList(!teacherList);
    if (!teacherList) {
      setButtonLabel('See Students');
    } else {
      setButtonLabel('See Teachers');
    }
  }

  useEffect(() => {fetch('src/studentlist.json')
  .then((data) => {
    return (data.json())})
  .then((data) => {
      return setStudentData(data.studentlist)})}, []);

  useEffect(() => {fetch('src/teacherlist.json')
  .then((data) => {
    return (data.json())})
  .then((data) => {
      return setTeacherData(data.teacherlist)})}, []);
  // function to compare searchedName with each student's name. Returns boolean to determine whether to render that student's data or not
  function nameSearch(enteredName, studentName) {
    for (let i = 0; i < enteredName.length; i++) {
      if (enteredName[i] !== studentName[i]) {
        return false;
      }
    }
    return true;
  }
  // function to update target name (called searchedName) when user types in search bar
  function searchingName(e) {
    setSearchedName(e.target.value);
  }

  function orderByAlphabet() {
    const ordered = [...studentData].sort((a, b) => {
      const studentA = a.name.toLowerCase();
      const studentB = b.name.toLowerCase();
      return (studentA < studentB) ? -1 : 1;
    });
    const inOrder = [...teacherData].sort((a, b) => {
      const teacherA = a.name.toLowerCase();
      const teacherB = b.name.toLowerCase();
      return (teacherA < teacherB) ? -1 : 1;
    });
    setStudentData(ordered);
    setTeacherData(inOrder);
  }
  function orderRandomly() {
    const randomStudents = [...studentData].sort((a, b) => {
      return a.id - b.id;
    });
    setStudentData(randomStudents);
    const randomTeachers = [...teacherData].sort((a, b) => {
      return a.id - b.id;
    });
    setTeacherData(randomTeachers);
  }
  function orderByClass() {
    const orderedStudents = [...studentData].sort((a, b) => {
      return (a.house < b.house) ? -1 : 1;
    });
    setStudentData(orderedStudents);
    const orderedTeachers = [...teacherData].sort((a, b) => {
      return (a.house < b.house) ? -1 : 1;
    });
    setTeacherData(orderedTeachers);
  }
  function orderByAge() {
    const orderedStudents = [...studentData].sort((a, b) => {
      return (a.age < b.age) ? -1 : 1;
    });
    setStudentData(orderedStudents);
    const orderedTeachers = [...teacherData].sort((a, b) => {
      return (a.age < b.age) ? -1 : 1;
    });
    setTeacherData(orderedTeachers);
  }
  return (
    <div>
      <div id="controlpanel">
        <button onClick={orderByAlphabet}>Order Alphabetically</button>
        <button onClick={orderRandomly}>Order "Randomly"</button>
        <button onClick={orderByClass}>Order by Class</button>
        <button onClick={orderByAge}>Order by Age</button>
      </div>
    <input type="text" id="name-search" placeholder='type a name' onChange={searchingName}></input>
    <div id="teachertogglebox">
    <button onClick={switchLists} id="teachertoggle">{buttonLabel}</button>
    </div>
    <ul id="doublelists">
      <ul style={!teacherList && props.showOrHide ? {visibility: "visible"} : {visibility: "hidden"}}>
    {studentData.map((student) => {
      if (!nameSearch(searchedName, student.name)) {
        return null;
      } else {
      return <StudentProfile key={student.id} name={student.name} pic={student.face} age={student.age} likes={student.likes} crest={student.crest} crestEffect={student.crestEffect} uniquecolor={student.color} cresticon={student.crestIcon} courses={[]} favSubjects={student.favSubjects} house={student.house}/>}
})}
</ul>
<ul style={teacherList && props.showOrHide ? {visibility: "visible"} : {visibility: "hidden"}}>
    {teacherData.map((teacher) => {
      if (!nameSearch(searchedName, teacher.name)) {
        return null;
      } else {
        return <StudentProfile key={teacher.id} name={teacher.name} pic={teacher.face} age={teacher.age} likes={teacher.likes} crest={teacher.crest} crestEffect={teacher.crestEffect} uniquecolor={teacher.color} cresticon={teacher.crestIcon} courses={teacher.courses} favSubjects={[]}/>}
    })}
    </ul>
    </ul>
    </div>
    
  )
}

export default CharacterApp

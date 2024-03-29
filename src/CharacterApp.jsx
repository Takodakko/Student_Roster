import { useState } from 'react'
import './CharacterApp.css'
import StudentProfile from './StudentProfile.jsx';
import characterLists from './characterLists.js';

function CharacterApp(props) {
  const { studentList, teacherList } = characterLists;
  const [studentData, setStudentData] = useState(studentList);
  const [teacherData, setTeacherData] = useState(teacherList);
  const [searchedName, setSearchedName] = useState('');
  const [showTeacherList, setShowTeacherList] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('See Teachers');
  
  function switchLists() {
    setShowTeacherList(!showTeacherList);
    if (!showTeacherList) {
      setButtonLabel('See Students');
    } else {
      setButtonLabel('See Teachers');
    }
  }

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
    const copyStudents = [...studentData];
    const randomStudents = [];
    while (copyStudents.length) {
      const randomNumber = Math.floor(Math.random() * copyStudents.length);
      randomStudents.push(copyStudents[randomNumber]);
      copyStudents.splice(randomNumber, 1);
    }
    setStudentData(randomStudents);
    const copyTeachers = [...teacherData];
    const randomTeachers = [];
    while (copyTeachers.length) {
      const randomNumber = Math.floor(Math.random() * copyTeachers.length);
      randomTeachers.push(copyTeachers[randomNumber]);
      copyTeachers.splice(randomNumber, 1);
    }
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
      if (a.name === "Flayn") {
        return 1;
      }
      if (b.name === "Flayn") {
        return -1;
      }
      return (a.age > b.age) ? 1 : -1;
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
        <button onClick={orderRandomly}>Order Randomly</button>
        <button onClick={orderByClass}>Order by Class</button>
        <button onClick={orderByAge}>Order by Age</button>
      </div>
    <input type="text" id="name-search" placeholder='type a name' onChange={searchingName}></input>
    <div id="teachertogglebox">
    <button onClick={switchLists} id="teachertoggle">{buttonLabel}</button>
    </div>
    <ul id="doublelists">
      <ul style={!showTeacherList && props.showOrHide ? {visibility: "visible"} : {visibility: "hidden"}}>
    {studentData.map((student) => {
      if (!nameSearch(searchedName.toLowerCase(), student.name.toLowerCase())) {
        return null;
      } else {
      return <StudentProfile key={student.id} name={student.name} pic={student.face} age={student.age} likes={student.likes} crest={student.crest} crestEffect={student.crestEffect} uniquecolor={student.color} cresticon={student.crestIcon} courses={[]} favSubjects={student.favSubjects} house={student.house}/>}
})}
</ul>
<ul style={showTeacherList && props.showOrHide ? {visibility: "visible"} : {visibility: "hidden"}}>
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

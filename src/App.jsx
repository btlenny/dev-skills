import './App.css';
import SkillList from './SkillList.jsx';
import { useState } from "react";
import NewSkillForm from './NewSkillForm.jsx'

const initialSkills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)

  function addSkills(skill) {
    setSkills([...skills, skill]);
  }

  return (
    <div className="App">
        <h1>React Skills</h1>
        <button onClick={() => setShowSkills(!showSkills)}></button>
      {showSkills && <SkillList skills={skills} />}
      <hr />
      <NewSkillForm addSkills={addSkills}/>
    </div>
  );
}

export default App;
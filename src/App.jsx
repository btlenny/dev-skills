import './App.css';
import SkillList from './SkillList';
import { useState } from "react";

const initialSkills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
];

function App() {
  const [skills, setSkills] = useState(initialSkills)
  const [showSkills, setShowSkills] = useState(true)
  return (
    <div className="App">
 
        <h1>React Skills</h1>
      
      {showSkills && <SkillList skills={skills} />}
      
    </div>
  );
}

export default App;
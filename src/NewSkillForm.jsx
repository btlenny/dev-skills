import './newskillform.css';
import { useState } from "react";

export default function NewSkillForm({addSkills}) {
  const [newSkill, setNewSkill] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(1);

  function handleAddSkill(event) {
    event.preventDefault();
    const skill = { name: newSkill, level: selectedLevel };
    addSkills(skill);
    setNewSkill("");
  }

return (
  <>
  <h2>New Skill</h2>
  <form onSubmit={handleAddSkill}>
  <input
    value={newSkill}
    onChange={(event) => setNewSkill(event.target.value)}
    placeholder="New Skill" 
    required
    pattern=".{5,}"
    />
     <label>
        Level
        <select
        value={selectedLevel}
        onChange={(event) => setSelectedLevel(Number(event.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
  <button type="submit">ADD SKILL</button>
  </form>
</>
  );
}


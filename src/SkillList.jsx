import React from 'react';
import SkillListItem from './SkillListItem';
import NewSkillForm from './NewSkillForm';

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
];

function SkillList() {
  return (
    <div>
      <hr />
      <h2>Skills List</h2>
      <ul>
        {skills.map((skill, idx) => (<SkillListItem key={idx} skill={skill} />
        ))}
      </ul>
      <NewSkillForm />
    </div>
  );
}

export default SkillList;
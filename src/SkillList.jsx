import React from 'react';
import SkillListItem from './SkillListItem';
import NewSkillForm from './NewSkillForm';



export default function SkillList({ skills }) {
  const skillListItems = skills.map((skill, idx) => (<SkillListItem skill=
    {skill} index={idx} key={skill.id} />
  ));

  return (
    <ul className="SkillList">
      {skillListItems}

    </ul>
  );
}


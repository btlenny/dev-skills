import './skilllistitem.css';
import React from 'react';

export default function SkillListItem({ skill }) {
  return (
    <li className="SkillListItem">
      <div>{skill.name}</div> - <div className="level">Level {skill.level}</div>
    </li>
  );
}
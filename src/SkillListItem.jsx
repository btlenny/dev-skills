import './skilllistitem.css';

export default function SkillListItem ( {skill, index} ) {
  const { name, level } = skill;
  return (
    <li className="SkillListItem">
      <div>{skill.name}</div> - <div className="level">Level {skill.level}</div>
    </li>
  );
}


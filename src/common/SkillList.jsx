import checkMarkIcon from "../assets/checkmark-dark.svg";
function SkillList({skill}) {
  return (
    <span>
      <img src={checkMarkIcon} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

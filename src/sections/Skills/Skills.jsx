import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList skill="HTML" /> 
           <SkillList skill="CSS" />
           <SkillList skill="JavaScript" /> 
           <SkillList skill="Java" />  
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList skill="React" /> 
           <SkillList skill="Node.js" /> 
           <SkillList skill="Express.js" /> 
           <SkillList skill="MongoDB" /> 
           
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList skill="oAuth" /> 
           <SkillList skill="Tailwind CSS" /> 
           <SkillList skill="Bootstrap" /> 
           <SkillList skill="Git & Github" /> 
        </div>
    </section>
  )
}

export default Skills

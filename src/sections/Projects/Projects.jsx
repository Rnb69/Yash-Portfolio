import styles from "./ProjectStyles.module.css";
import ProjectCard from "../../common/ProjectCard.jsx";
import viberr from "../../assets/viberr.png";
import burger from "../../assets/fresh-burger.png";
import reactnotes from "../../assets/reactnotes.png";
import sundown from "../../assets/sundown.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Rnb69/MovieApp"
          title="Movie App"
          desc="Streaming App"
        />
        <ProjectCard
          src={burger}
          link="https://github.com/Rnb69/recipe-app"
          title="Recipe App"
          desc="Cooking Recipe App"
        />
        <ProjectCard
          src={reactnotes}
          link="https://github.com/Rnb69/ReactBasicNotesApp"
          title="React Notes"
          desc="Notes Taking App"
        />
        <ProjectCard
          src={sundown}
          link="https://github.com/Rnb69/Sundown-studio"
          title="Sundown Clone"
          desc="CLone of Sundown Studio"
        />
        
      </div>
    </section>
  );
}

export default Projects;

function ProjectCard({link,src,title,desc}) {
  return (
      <a href={link}>
        <img className="hover" src={src}  alt= {`${title} logo`} />
        <h3>{title}</h3>
        <p>{desc}</p>
      </a>
  );
}

export default ProjectCard;

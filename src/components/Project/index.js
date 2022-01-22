function Project(props) {
  const { img, title } = props;
  return (
    <div>
      <a href="https://vic-smith.github.io/Taco-Loca-tor/"/>
      <h1>{title}</h1>
      <img src={img} />
    </div>
  );
}

export default Project;

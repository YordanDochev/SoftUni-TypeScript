import { Link } from "react-router-dom";

function ProjectDescription(props) {
  const { href, name } = props;
  return (
    <div>
      {" "}
      This was developed by
      <Link to={href}>{name}</Link>
    </div>
  );
}

export default ProjectDescription;

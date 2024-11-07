import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import ProjectDescription from "../ProjectDescription/ProjectDescription";

const Home = () => {
  const { user } = useUser();

  return (
    <div className={styles.content}>
      <h1>Energy Efficiency Calculator v0.1</h1>
      <ProjectDescription href="www.google.com" name="Company Name" />
      <div className={styles.navButtons}>
        <ul>
          {user.email ? (
            <>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="users/login">Login</Link>
              </li>
              <li>
                <Link to="users/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;

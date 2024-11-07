import styles from "./ProjectsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { setDoc, getDocs, doc, collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, firebaseTable } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { projectTemplate } from "../../app/projectTemplate";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState("");

  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, "projects"));
      const querySnapshot = await getDocs(q);
      const projects = querySnapshot.docs
        .filter(
          (doc) =>
            doc.data().ownerId === user.userId ||
            doc.data().sharedOwnerId?.includes(user.userId)
        )
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      setProjects(projects);
    };

    fetchProjects();
  }, [user.userId]);

  const handleCreation = async (e) => {
    e.preventDefault();

    if (currentProject === "") {
      return;
    }

    if (user.userId === "") {
      navigate("/users/login");
      return;
    }

    const newProject = {
      name: currentProject,
      created: new Date(),
      ownerId: user.userId,
    };

    try {
      const projectDocRef = doc(collection(db, "projects"));
      await setDoc(projectDocRef, newProject);

      firebaseTable.add(projectTemplate, projectDocRef.id);

      setProjects((prevProjects) => [
        ...prevProjects,
        { id: projectDocRef.id, ...newProject },
      ]);

      setCurrentProject("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.siteProjects}>
      <h1>Списък с проекти:</h1>
      <ul className={styles.projectsList}>
        {projects.length === 0 ? (
          <p>You dont have projects yet.</p>
        ) : (
          projects.map((project) => (
            <li key={project.id}>
              <Link to={`/${project.id}/calculator`}>{project.name}</Link>
            </li>
          ))
        )}
      </ul>
      <input
        type="text"
        value={currentProject}
        onChange={(e) => setCurrentProject(e.target.value)}
        placeholder="Въведете име на проекта"
      />
      <button onClick={handleCreation} className={styles.addProjectBtn}>
        <FontAwesomeIcon icon={faPlus} className={styles.plusIcon} />
        Добави нов проект
      </button>
    </div>
  );
};

export default ProjectsList;

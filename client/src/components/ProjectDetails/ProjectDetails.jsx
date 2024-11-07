import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log(id);
        const projectDoc = await getDoc(doc(db, "projects", id));
        if (projectDoc.exists()) {
          setProject(projectDoc.data());
        } else {
          setError("Project not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>
        Created on: {new Date(project.created.toDate()).toLocaleDateString()}
      </p>
      <p>Owner id: {project.ownerId}</p>
    </div>
  );
};

export default ProjectDetails;

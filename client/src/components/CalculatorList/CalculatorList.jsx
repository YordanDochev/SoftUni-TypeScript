import { useEffect, useState } from "react";
import styles from "./CalculatorList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { firebaseTable } from "../../config/firebase";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc, getDocs, query, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

import { loadTables, reduxMagic } from "../../app/slices/tablesSlice";
import { loadSelectionBase } from "../../app/slices/selectionSlice";
import Calculator from "../Calculator/Calculator";

const CalculatorList = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectName, setProjectName] = useState("");
  const dispatch = useDispatch();

  const tables = useSelector((state) => {
    return state.tables;
  });

  const handleSaveData = () => {
    firebaseTable.add(tables, id);
  };

  const handleFixRedux = () => {
    dispatch(reduxMagic());
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectDoc = await getDoc(doc(db, "projects", id));
        if (projectDoc.exists()) {
          setProjectName(projectDoc.data().name);
        } else {
          console.log("Project not found");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const projectDoc = await getDoc(doc(db, "tables", id));
        if (projectDoc.exists()) {
          dispatch(loadTables(projectDoc.data()));
        } else {
          console.log("Project tables not found");
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTables();
  }, [id]);

  useEffect(() => {
    const fetchSelection = async () => {
      try {
        const q = query(collection(db, "selectionFields"));
        const querySnapshot = await getDocs(q);
        const selection = querySnapshot.docs.reduce(
          (acc, doc) => ({
            ...acc,
            [doc.id]: doc.data(),
          }),
          {}
        );

        dispatch(loadSelectionBase(selection));
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSelection();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="font-sans flex flex-col">
      <div className={styles.buttons}>
        <h2 className={styles.projectTitle}>{projectName}</h2>

        <button className="m-2 bg-white hover:bg-green-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow">
          <FontAwesomeIcon icon={faFolder} />
          <Link to={"/projects"}> Проекти</Link>
        </button>

        <button
          className="m-2 bg-white hover:bg-green-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleSaveData}
        >
          <p>🖫 Запази</p>
        </button>

        {/* Uncomment below button at your own risk ;-) */}
        <button
          className="flex m-2 bg-white hover:bg-green-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleFixRedux}
        >
          <p>-*- Redux Magic -*-</p>
        </button>
      </div>

      <Calculator handleSaveData={handleSaveData} />
    </div>
  );
};

export default CalculatorList;

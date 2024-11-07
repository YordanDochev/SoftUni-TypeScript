import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./Navigation.module.css";
import { firebaseAuth } from "../../config/firebase";
import Cookies from "js-cookie";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const logoutHandler = async () => {
    await firebaseAuth.logout();
    setUser({});
    Cookies.remove("authToken");
    navigate("/");
  };

  return (
    <>
      {user.email ? (
        <button className={styles.button} onClick={logoutHandler}>
          Изход
        </button>
      ) : null}
    </>
  );
};

export default Navigation;

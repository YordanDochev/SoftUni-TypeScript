import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import styles from "./Auth.module.css";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === "/users/login" ? true : false;

    return (
      <div className={styles.container}>
        <div className={styles.stripes}>
          <div className={styles.orange}></div>
          <div className={styles.grey}></div>
          <div className={styles.pink}></div>
        </div>
        <div className={styles.leftCol}>
          <div className={styles.logo}>EEC</div>
          <div className={styles.content}>
            <div className={styles.form}>
              <div className={styles.headerButtons}>
                <div className={styles.buttonWrapper}>
                  <Link
                    className={
                      styles.navButton + " " + (isLogin ? styles.active : "")
                    }
                    to="/users/login"
                  >
                    Вход
                  </Link>
                </div>
                <div className={styles.buttonWrapper}>
                  <Link
                    className={
                      styles.navButton + " " + (!isLogin ? styles.active : "")
                    }
                    to="/users/register"
                  >
                    Регистрация
                  </Link>
                </div>
              </div>
              {isLogin ? <Login /> : <Register />}
            </div>
          </div>
        </div>
        <div className={styles.rightCol}></div>
      </div>
    );
};

export default Auth;
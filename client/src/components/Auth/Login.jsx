import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { firebaseAuth } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import styles from "./Auth.module.css";
import Cookies from "js-cookie";
import useAuthValidator from "../../hooks/useAuthValidator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { errors, validatorHandler, setError } = useAuthValidator();
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebaseAuth.login(email, password);
      const user = userCredential.user;

      setUser({ email: user.email, userId: user.uid });
      Cookies.set("authToken", await user.getIdToken(), { expires: 7 });

      navigate("/");
    } catch (error) {
      console.log("Error logging in user:", error);
      setError({ ...error, email: `Wrong username or password!` });
      setPassword("");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>Имейл
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className={styles.inputField}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validatorHandler("email", email)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>Парола
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className={styles.inputField}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatorHandler("password", password)}
          />
        </div>
      </form>
      <p>Забравена парола?</p>
      <div className={styles.buttonWrapper}>
        <Link role="button" className={styles.submitBtn} onClick={handleSubmit}>
          Продължи
        </Link>
      </div>
    </>
  );
};

export default Login;

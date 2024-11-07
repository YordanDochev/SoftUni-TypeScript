import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../config/firebase";
import { useUser } from "../../contexts/UserContext";
import Cookies from "js-cookie";
import styles from "./Auth.module.css";
import useAuthValidator from "../../hooks/useAuthValidator";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { errors, validatorHandler, setError } = useAuthValidator();
  const navigate = useNavigate();

  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebaseAuth.register(email, password);
      const user = userCredential.user;

      setUser({ email, userId: user.uid });
      Cookies.set("authToken", await user.getIdToken(), { expires: 7 });

      navigate("/");
    } catch (error) {
      console.log("Error registering user:", error);
      setError({ ...error, email: `Email already in use!` });
      setPassword("");
      setRePassword("");
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
        <div className={styles.field}>
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>Парола
          </label>
          <input
            type="password"
            id="rePassword"
            value={rePassword}
            className={styles.inputField}
            onChange={(e) => setRePassword(e.target.value)}
            onBlur={() => validatorHandler("rePassword", password, rePassword)}
          />
        </div>
      </form>
      <div className={styles.buttonWrapper}>
        <Link role="button" className={styles.submitBtn} onClick={handleSubmit}>
          Регистрация
        </Link>
      </div>
    </>
  );
};

export default Register;

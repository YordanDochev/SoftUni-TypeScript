import { useState } from "react";

export default function useAuthValidator() {
  const [errors, setError] = useState({});

  const validatorHandler = (key, value, value2) => {
    switch (key) {
      case "email":
        if (!value) {
          setError((state) => ({
            ...state,
            email: "Email is required!",
          }));
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        if (!isValid) {
          setError((state) => ({
            ...state,
            email: "Invalid email!",
          }));
        } else {
          setError((state) => ({
            ...state,
            email: "",
          }));
        }
        break;

      case "password":
        if (!value) {
          setError((state) => ({
            ...state,
            password: `Password is required!`,
          }));
          return;
        }

        if (value.length < 5) {
          setError((state) => ({
            ...state,
            password: "Password must be at least 5 characters long",
          }));
        } else {
          setError((state) => ({
            ...state,
            password: "",
          }));
        }
        break;
      case "rePassword":
        if (!value) {
          setError((state) => ({
            ...state,
            rePassword: `Repeat password is required!`,
          }));
          return;
        } else if (value !== value2) {
          setError((state) => ({
            ...state,
            rePassword: `Passwords do not match!`,
          }));
        } else {
          setError((state) => ({ ...state, rePassword: "" }));
        }
        break;
      default:
        break;
    }
  };

  return {
    errors,
    setError,
    validatorHandler,
  };
}

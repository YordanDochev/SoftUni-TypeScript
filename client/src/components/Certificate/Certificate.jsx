import styles from "./Certificate.module.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";

const Certificate = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.page} id="page1">
        <FirstPage />
      </div>
      <div className={styles.page} id="page2"> 
        <SecondPage />
      </div>
      <div className={styles.page} id="page3"> 
        <ThirdPage />
      </div>
      <div className={styles.page} id="page4">
        <FourthPage />
      </div>
      <div className={styles.page} id="page5">
        <FifthPage />
      </div>
    </div>
  );
};

export default Certificate;

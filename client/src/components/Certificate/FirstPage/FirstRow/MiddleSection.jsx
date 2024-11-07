import styles from "./FirstRow.module.css";

const MiddleSection = () => {
  return (
    <div className={styles.middleContainer}>
      <div>
        <p>СГРАДА С БЛИЗКО ДО НУЛЕВО ПОТРЕБЛЕНИЕ НА ЕНЕРГИЯ</p>
      </div>
      <div className={styles.options}>
        <label>
          ДА
          <input type="radio" name="choice" value="HTML" />
        </label>
        <label>
          НЕ
          <input type="radio" name="choice" value="HTML" />
        </label>
      </div>
    </div>
  );
};

export default MiddleSection;

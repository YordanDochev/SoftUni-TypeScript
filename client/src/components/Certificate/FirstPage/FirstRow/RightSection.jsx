import styles from "./FirstRow.module.css";

const RightSection = () => {
  return (
    <div className={styles.rightContainer}>
      <div>
        <p>
          Дял на потребната възобновяема енергия за отопление, охлаждане,
          вентилация, БГВ и осветление
        </p>
      </div>
      <div>
        <p>... %</p>
      </div>
    </div>
  );
};

export default RightSection;

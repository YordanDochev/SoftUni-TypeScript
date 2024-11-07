import styles from "./SixthRow.module.css";

const RightCol = () => {
  return (
    <div className={styles.signatureContainer}>
      <div className={styles.topRow}>
        <h3>Издаден от</h3>
        <div className={styles.signature}>
          <div className={styles.left}>
            <p>...........</p>
            <p>(наименование на юридическото лице)</p>
          </div>
          <div className={styles.right}>
            <p>...........</p>
            <p>(име, фамилия на управителя)</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <h3>Регистрационен номер</h3>
        <div className={styles.signature}>
          <div className={styles.left}>
            <p>№ ............................. / ............................. г.</p>
          </div>
          <div className={styles.right}>
            <p>(подпис, печат)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCol;

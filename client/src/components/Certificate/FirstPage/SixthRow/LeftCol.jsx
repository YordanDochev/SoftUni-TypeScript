import styles from "./SixthRow.module.css";

const LeftCol = () => {
    return (
      <div className={styles.colContainer}>
        <div className={styles.row}>
          <p>Сертификатът се издава по:</p>
          <div className={styles.whiteBG}>
            <p>Ен. х-ки, изчислени по проект: ДА/НЕ </p>
            <p>Енергийни х-ки по екзекутив: ДА/НЕ</p>
          </div>
        </div>
        <div className={styles.row}>
          <label htmlFor="issueDate">Издаден на</label>
          <input type="text" name="issueDate" />
        </div>
      </div>
    );
};

export default LeftCol;
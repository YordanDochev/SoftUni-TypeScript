import styles from "./FirstRow.module.css"

const LeftSection = () => {
    return (
        <div className={styles.leftContainer}>
            <div className={styles.row}>
                <label htmlFor="number">Номер</label>
                <input type="text" name="number" id="number" />
            </div>
            <div className={styles.row}>
                <label htmlFor="expirationDate">Валиден до:</label>
                <input type="text" name="expirationDate" id="expirationDate" />
            </div>
        </div>
    );
};

export default LeftSection;
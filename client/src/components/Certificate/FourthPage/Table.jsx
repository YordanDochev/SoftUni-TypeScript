import styles from "./Table.module.css";
import Footer from "../Shared/Footer";

const Table = () => {

    return (
        <>
            <div className={styles.tableContainer}>
                <p>БАЗОВА ЛИНИЯ НА ЕНЕРГОПОТРЕБЛЕНИЕТО
                </p>
                <span className={styles.attachment}>
                    Натиснете за вмъкване на изображение във <br />
                    формат - JPG, JPEG, BMP, Формат PNG не се <br />
                    поддържа.
                </span>
            </div>
            <div className={styles.tableContainer}>
                <p>ГОДИШНО РАЗПРЕДЕЛЕНИЕ НА СПЕЦИФИЧНОТО <br /> ЕНЕРГОПОТРЕБЛЕНИЕ
                </p>
                <span className={styles.attachment}>
                    Натиснете за вмъкване на изображение във <br />
                    формат - JPG, JPEG, BMP, Формат PNG не се <br />
                    поддържа.
                </span>
            </div>
            <Footer />
        </>
    );
};

export default Table;
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.title}>СЕРТИФИКАТ</h1>
            <h2 className={styles.subtitle}>
                за енергийни характеристики на нова сграда
            </h2>
        </div>
    );
};

export default Header;
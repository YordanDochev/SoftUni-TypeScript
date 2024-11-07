import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.box}>
                <label htmlFor="issuedDate">Издаден на</label>
                <input type="text" name="issuedDate" />
            </div>
            <div className={styles.box}>
                <label htmlFor="issuedBy">Издаден от</label>
                <input type="text" name="issuedBy" />
            </div>
        </div>
    );
};

export default Footer;
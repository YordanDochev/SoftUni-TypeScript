import styles from "./SideBanner.module.css";

const SideBanner = ({
    number
}) => {

    return (
        <div className={styles.container}>
            <div className={styles.circle}>{number}</div>
            <div className={styles.title}>СЕРТИФИКАТ</div>
        </div>
    )
};

export default SideBanner
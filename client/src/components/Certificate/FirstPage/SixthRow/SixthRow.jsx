import LeftCol from "./LeftCol";
import RightCol from "./RightCol";
import styles from "./SixthRow.module.css";

const SixthRow = () => {
    return (
      <div className={styles.container}>
        <LeftCol />
        <RightCol />
      </div>
    );
};

export default SixthRow;
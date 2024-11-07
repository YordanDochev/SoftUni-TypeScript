import styles from "./SecondRow.module.css";
import TopSide from "./TopSide";
import BottomSide from "./BottomSide";

const SecondRow = () => {
    return (
        <div className={styles.container}>
            <TopSide />
            <BottomSide />
        </div>
    );
};

export default SecondRow;
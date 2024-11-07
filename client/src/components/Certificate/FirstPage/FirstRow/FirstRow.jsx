import styles from "./FirstRow.module.css";

import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

const FirstRow = () => {
    return (
        <div className={styles.container}>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
    );
};

export default FirstRow;
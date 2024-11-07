import SideBanner from '../Shared/SideBanner';
import styles from './SecondPage.module.css';
import Table from './Table';

const SecondPage = () => {
    return (
        <div className={styles.container}>
            <SideBanner number={2} />
            <div className={styles.rightCol}>
                <Table />
            </div>
        </div>
    )
};

export default SecondPage;
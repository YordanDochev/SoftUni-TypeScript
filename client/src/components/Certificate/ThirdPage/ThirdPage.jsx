import styles from './ThirdPage.module.css';
import SideBanner from '../Shared/SideBanner';
import Table from './Table';

const ThirdPage = () => {
    return (
        <div className={styles.container}>
            <SideBanner number={3} />
            <div className={styles.rightCol}>
                <Table />
            </div>
        </div>
    )
};

export default ThirdPage;
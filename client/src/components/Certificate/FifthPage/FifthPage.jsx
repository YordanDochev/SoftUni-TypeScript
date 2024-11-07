import styles from './FifthPage.module.css';
import SideBanner from '../Shared/SideBanner';
import Table from './Table';

const FifthPage = () => {
    return (
        <div className={styles.container}>
            <SideBanner number={5} />
            <div className={styles.rightCol}>
                <Table />
            </div>
        </div>
    )
};

export default FifthPage;
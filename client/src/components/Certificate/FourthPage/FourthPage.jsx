import styles from './FourthPage.module.css';
import SideBanner from '../Shared/SideBanner';
import Table from './Table';

const FourthPage = () => {
    return (
        <div className={styles.container}>
            <SideBanner number={4} />
            <div className={styles.rightCol}>  
                <Table /> 
            </div>
        </div>
    )
};

export default FourthPage;
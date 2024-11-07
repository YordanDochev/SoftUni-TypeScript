import Footer from "../Shared/Footer";
import styles from "./Table.module.css";

const Table = () => {

    return (
        <>
            <div className={styles.tableContainer}>
                <p>ЕНЕРГИЙНИ ХАРАКТЕРИСТИКИ НА СГРАДАТА</p>
                <p>ОГРАЖДАЩИ ЕЛЕМЕНТИ НА КОНСТРУКЦИЯТА</p>
                <table border="1" className={styles.table}>
                    <thead>
                        <tr>
                            <th rowSpan="2">Наименование</th>
                            <th rowSpan="2">Площ</th>
                            <th colSpan="3" className={styles.special}>[2] Коефициент на топлопреминаване</th>
                        </tr>
                        <tr>
                            <td>Нормативен</td>
                            <td>По проект</td>
                            <td>По изпълнен проект</td>
                        </tr>
                        <tr className={styles.narrow}>
                            <td className={styles.special}>-</td>
                            <td className={`${styles.fixedWidth} ${styles.special}`}>m2</td>
                            <td className={`${styles.fixedWidth} ${styles.special}`}>W/m2.K</td>
                            <td className={`${styles.fixedWidth} ${styles.special}`}>W/m2.K</td>
                            <td className={`${styles.fixedWidth} ${styles.special}`}>W/m2.K</td>
                        </tr>
                        <tr>
                            <td>Стени (външни)</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Прозорци (външни)</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Прозорци на покрива</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Врати (външни)</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Покрив</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Под</td>
                            <td></td>
                            <td className={styles.special}></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                </table>
                <p>ЕНЕРГИЙНИ ХАРАКТЕРИСТИКИ НА СИСТЕМИТЕ ЗА ГЕНЕРИРАНЕ НА ЕНЕРГИЯ</p>
                <table border="1" className={styles.table}>
                    <tr>
                        <th rowSpan="1" colSpan="3" className={styles.green}>1. Показатели за технологичните процеси на отопление и вентилация</th>
                        <th colSpan="3" className={styles.green}>2. Ефективност на генератора на топлина, %</th>
                    </tr>
                    <tr>
                        <td>Показател</td>
                        <td>По проект</td>
                        <td>По изпълнен проект</td>
                        <td>По проект</td>
                        <td>По изпълнен проект</td>
                        <td>[1] Норма</td>
                    </tr>
                    <tr>
                        <th rowSpan="2" className={styles.yellow}>Инсталирана мощност за отопление, kW</th>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                    <tr>
                        <th colSpan="3" rowSpan="2" className={styles.yellow}>Ефективност на рекуперацията на топлина при вентилация, %</th>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>ɳr,min ≥ … %</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>ɳr,min ≥ … %</td>
                    </tr>
                    <tr>
                        <th colSpan="6" className={styles.green}>3. Ефективност на генератора на студ
                            (включително термопомпа с приложение за отопление)
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="3">Показател</th>
                        <td>По
                            проект
                        </td>
                        <td>По изпълнен проект</td>
                        <td>[3] Норма за възобновяе-ма енергия</td>
                    </tr>
                    <tr>
                        <th colSpan="3" rowSpan="2" className={styles.yellow}>Коефициент на
                            трансформация при генерирането на топлина
                        </th>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                    <tr>
                        <th colSpan="3" rowSpan="2" className={styles.yellow}>Коефициент на
                            трансформация при генерирането на студ
                        </th>
                        <td>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                    <tr>
                        <td className={styles.fixedWidth}>...</td>
                        <td>...</td>
                        <td className={styles.yellow}>...</td>
                    </tr>
                </table>
                <p>Сградна система за автоматизация и управление съгласно ЗЕЕ</p>
                <table border="1" className={styles.table}>
                    <tr>
                        <th rowSpan="2" className={styles.green}>4. Сградна система за автоматизация и управление съгласно ЗЕЕ</th>
                        <td className={styles.fixedWidth}>По проект</td>
                        <td className={styles.fixedWidth}>Изпълнен проект</td>
                    </tr>
                    <tr>
                        <td className={styles.fixedWidth}>...</td>
                        <td className={styles.fixedWidth}>...</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </>
    )
};

export default Table;
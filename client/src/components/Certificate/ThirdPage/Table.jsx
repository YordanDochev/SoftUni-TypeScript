import styles from "./Table.module.css";
import Footer from "../Shared/Footer";

const Table = () => {

    return (
        <>
            <div className={styles.tableContainer}>
                <p>РАЗПРЕДЕЛЕНИЕ <br /> НА  ГОДИШНОТО  ПОТРЕБЛЕНИЕ  НА  ПОТРЕБНА ЕНЕРГИЯ
                </p>
                <table className={styles.table}>
                    <tr>
                        <th colSpan="5" className={styles.yellow}>
                            <div className={styles.choice}>
                                <input type="radio" />
                                <label htmlFor="">
                                    ПО ПРОЕКТ ПРЕДИ РАЗРЕШЕНИЕ ЗА СТРОЕЖ
                                </label>
                            </div>
                            <div className={styles.choice}>
                                <input type="radio" />
                                <label htmlFor="">
                                    ПО ИЗПЪЛНЕН ПРОЕКТ СЛЕД ЕТАПА НА СТРОИТЕЛСТВО
                                </label>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th rowSpan="2">Система</th>
                        <th rowSpan="2">Енергиен ресурс</th>
                        <th rowSpan="2">Генератор</th>
                        <td colSpan="2">Годишно потребление на потребна енергия</td>
                    </tr>
                    <tr>
                        <td className={styles.fixedWidth}>Специфично</td>
                        <td className={styles.fixedWidth}>Общо</td>
                    </tr>
                    <tr>
                        <td className={styles.yellow}>Вид</td>
                        <td className={styles.yellow}>Вид</td>
                        <td className={styles.yellow}>Вид</td>
                        <td className={styles.yellow}>kWh/m2</td>
                        <td className={styles.yellow}>kWh</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Отопление</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Вентилация</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Охлаждане</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Гореща вода</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Осветление</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">Други - уреди, потребяващи енергия</th>
                        <td>...</td>
                        <td>...</td>
                        <td rowSpan="2">...</td>
                        <td rowSpan="2">...</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <th className={styles.green} colSpan="3">Отоплителни денградуси, DD</th>
                        <td className={styles.green} colSpan="2">………..</td>
                    </tr>
                    <tr>
                        <th className={styles.green} colSpan="3">Климатична зона (от 1 до 9)</th>
                        <td className={styles.green} colSpan="2">………..</td>
                    </tr>
                </table>
            </div>
            <div className={styles.tableContainer}>
                <span className={styles.suggestions}>Препоръки:</span>
                <span className={styles.suggestionsInfo}>
                    Информация относно възможностите за финансиране на ЕСМ и друга актуална информация за състоянието на енергийната ефективност в България може да бъде намерена на електронната страница на Агенция за устойчиво енергийно развитие:  http://www.seea.government.bg
                </span>
            </div>
            <Footer />
        </>
    );
};

export default Table;
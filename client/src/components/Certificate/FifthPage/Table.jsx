import styles from "./Table.module.css";
import Footer from "../Shared/Footer";

const Table = () => {

    return (
        <>
            <div className={styles.tableContainer}>
                <p>ЕНЕРГОСПЕСТЯВАЩИ МЕРКИ И ОПОЛЗОТВОРЯВАНЕ НА <br /> 
                   ЕНЕРГИЯ ОТ ВЪЗОБНОВЯЕМИ ИЗТОЧНИЦИ
                </p>
                <table className={styles.table}>
                    <tr>
                        <th>Енергоспестяващи мерки (ЕСМ)</th>
                        <th>Инвестиции, лева</th>
                        <th>Спестена потребна енергия, kWh/год.</th>
                        <th>Спестени емисии CO2, тона/год.</th>
                        <th>Срок на откупуване, год.</th>
                    </tr>
                    <tr>
                        <td>Мерки по огр. елементи</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                    <tr>
                        <td >Мерки по системи</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                    <tr>
                        <td>Други мерки</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                    <tr>
                        <td>Пакети от мерки</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                    <tr>
                        <th colSpan={5}>Оползотворяване на енергия от възобновяеми източници</th>
                    </tr>
                    <tr>
                        <td>н/п</td>
                        <td>Н/П</td>
                        <td></td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                    <tr>
                        <th colSpan={5}>ЕНЕРГОСПЕСТЯВАЩИ МЕРКИ И ОПОЛЗОТВОРЯВАНЕ НА ЕНЕРГИЯ ОТ ВИ</th>
                    </tr>
                    <tr>
                        <td>ОБЩО</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                        <td>Н/П</td>
                    </tr>
                </table>
                <div className={`${styles.fields} ${styles.green}`}>
                    <div className={styles.field}>
                        <label htmlFor="package">Избран пакет за изпълнение от възложителя/собственика на сградата</label>
                        <input type="text" name="package" />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="package">Клас на енергопотребление след изпълнение на избрания пакет от ЕСМ</label>
                        <input type="text" name="package" />
                    </div>
                </div>
                <table className={styles.table}>
                    <tr>
                        <th colSpan={2}>Потребена енергия след изпълнение на ЕСМ от избрания пакет</th>
                        <th colSpan={2}>Първична невъзобновяема енергия след изпълнение на ЕСМ от избрания пакет</th>
                        <th colSpan={2}>Първична възобновяема енергия след изпълнение на ЕСМ от избрания пакет</th>
                        <th>Спестени Емисии CO2</th>
                    </tr>
                    <tr>
                        <td className={styles.fixedWidth}>Специфично</td>
                        <td className={styles.fixedWidth}>Общо</td>
                        <td className={styles.fixedWidth}>Специфично</td>
                        <td className={styles.fixedWidth}>Общо</td>
                        <td className={styles.fixedWidth}>Специфично</td>
                        <td className={styles.fixedWidth}>Общо</td>
                        <td className={styles.fixedWidth}>Общо</td>
                    </tr>
                    <tr>
                        <td>kWh/m2</td>
                        <td>kWh/год.</td>
                        <td>kWh/m2</td>
                        <td>kWh/год.</td>
                        <td>kWh/m2</td>
                        <td>kWh/год.</td>
                        <td>тона/год.</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default Table;
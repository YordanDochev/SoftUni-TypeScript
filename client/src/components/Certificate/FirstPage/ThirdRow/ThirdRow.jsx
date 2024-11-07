import styles from "./ThirdRow.module.css";

const ThirdRow = () => {
    return (
      <div className={styles.container}>
        <table border="1" className={styles.table}>
          <thead>
            <tr>
              <th rowSpan="2" colSpan="2" className={styles.noWrap}>
                Характеристики на сградата
              </th>
              <th colSpan="3" className={styles.noWrap}>
                Нормализирано потребление на първична енергия
              </th>
            </tr>
            <tr>
              <td className={styles.centered}>Вид енергия</td>
              <td className={styles.centered}>Специфично kWh/m2</td>
              <td className={styles.centered}>Общо kWh/год.</td>
            </tr>
          </thead>
          <tr>
            <td>Брой надземни етажи</td>
            <td className={styles.centered}>.…</td>
            <td>Първична невъзобновяема енергия</td>
            <td className={styles.centered}>……</td>
            <td className={styles.centered}>……</td>
          </tr>
          <tr>
            <td>Разгъната застроена площ</td>
            <td className={styles.noWrap}>…… m2</td>
            <td>Първична възобновяема енергия</td>
            <td className={styles.centered}>……</td>
            <td className={styles.centered}>……</td>
          </tr>
          <tr>
            <td>Обща климатизирана площ</td>
            <td className={styles.noWrap}>…… m2</td>
            <td>Първична енергия - обща</td>
            <td className={styles.centered}>……</td>
            <td className={styles.centered}>……</td>
          </tr>
          <tr>
            <td>Общ климатизиран обем</td>
            <td className={styles.noWrap}>…… m3</td>
            <td colSpan="2">Изнeсeна възобновяема енергия </td>
            <td className={styles.centered}>……</td>
          </tr>
        </table>
      </div>
    );
};

export default ThirdRow;
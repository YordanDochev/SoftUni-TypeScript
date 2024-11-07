import styles from "./FourthRow.module.css";

const RightTable = () => {
  return (
    <div className={styles.tableContainerRight}>
      <table border="1" className={styles.table}>
        <thead className={styles.rthead}>
          <tr>
            <th colSpan="2">
              Потребна енергия, генерирани емисии СО2 и дял на възобновяемата
              енергия
            </th>
          </tr>
        </thead>
        <tr>
          <th>Потребна енергия</th>
          <th>… MWh/ год.</th>
        </tr>
        <tr>
          <th>Генерирани емисии СО2</th>
          <th>… тона /год.</th>
        </tr>
        <tr>
          <th>Дял на потребната енергия от възобновяеми източници</th>
          <th>… %</th>
        </tr>
        <tr>
          <th>Дял на първичната енергия от възобновяеми източници</th>
          <th>… %</th>
        </tr>
      </table>
    </div>
  );
};

export default RightTable;

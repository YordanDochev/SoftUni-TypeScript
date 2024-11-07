import styles from "./FourthRow.module.css";

const LeftTable = () => {
  return (
    <div className={styles.tableContainerLeft}>
      <table border="1" className={styles.table}>
        <thead className={styles.lthead}>
          <tr>
            <th>EPmin kWh/m2</th>
            <th>EP kWh/m2</th>
            <th>EPmax kWh/m2</th>
            <th>
              Сграда за търговия - скала на енергопотребление по невъзобновяема
              първична енергия
            </th>
            <th>EP kWh/m2</th>
          </tr>
        </thead>
        <tr>
          <th>0</th>
          <th>EP &gt;</th>
          <th>275</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelA} src="ClassA.png" alt="" />
          </th>
          <th>
            <div className={styles.condition}>65</div>
          </th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>275</th>
          <th>&#8804; EP &lt;</th>
          <th>550</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelB} src="ClassB.png" alt="" />
          </th>
          <th></th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>550</th>
          <th>&#8804; EP &lt;</th>
          <th>600</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelC} src="ClassC.png" alt="" />
          </th>
          <th></th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>600</th>
          <th>&#8804; EP &lt;</th>
          <th>650</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelD} src="ClassD.png" alt="" />
          </th>
          <th></th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>650</th>
          <th>&#8804; EP &lt;</th>
          <th>813</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelE} src="ClassE.png" alt="" />
          </th>
          <th></th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>813</th>
          <th>&#8804; EP &lt;</th>
          <th>975</th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelF} src="ClassF.png" alt="" />
          </th>
          <th></th>
        </tr>
        <tr className={styles.empty}>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>975</th>
          <th>&#8804; EP</th>
          <th></th>
          <th className={styles.energyLabel}>
            <img className={styles.energyLabelG} src="ClassG.png" alt="" />
          </th>
          <th></th>
        </tr>
      </table>
    </div>
  );
};

export default LeftTable;

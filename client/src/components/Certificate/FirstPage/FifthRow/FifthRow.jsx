import styles from "./FifthRow.module.css";

const FifthRow = () => {
    return (
      <div className={styles.container}>
        <table className={styles.table} border="1">
          <tr>
            <th colSpan="6">
              РАЗПРЕДЕЛЕНИЕ НА ГОДИШНОТО ПОТРЕБЛЕНИЕ НА ПОТРЕБНА ЕНЕРГИЯ
            </th>
          </tr>
          <tr>
            <th>Отопление</th>
            <th>Вентилация</th>
            <th>Охлаждане</th>
            <th>Гореща вода</th>
            <th>Осветление</th>
            <th>Уреди</th>
          </tr>
          <tr>
            <th>....%</th>
            <th>....%</th>
            <th>....%</th>
            <th>....%</th>
            <th>....%</th>
            <th>....%</th>
          </tr>
        </table>
      </div>
    );
};

export default FifthRow;
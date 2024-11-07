import style from "./FourthRow.module.css";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";

const FourthRow = () => {
    return (
        <div className={style.container}>
            <LeftTable />
            <RightTable />
        </div>
    )
}

export default FourthRow;
import React from "react"
import Table from "../../Table/Table";
import { ECMFormulas } from "../../../utils/formulas/ЕCM";
import { useSelector } from "react-redux";


const CalculationECM = ({ data, header, heading, tableIndex }) => {
    const tablesData = useSelector((state) => {
        return state?.tables.ecm || {};
    });

    return (<>
        <Table
            header={header}
            rows={data}
            calculateFormula={ECMFormulas(data,tablesData)}
            tableSlice={"ecm"}
            tableIndex={tableIndex}
            config={{
                showAddRowButton: false,
                showDeleteTableButton: false
            }}
        />
    </>)
}

export { CalculationECM }
import React from "react"
import Table from "../../Table/Table";
import { calculationConstructionWorksFormulas } from "../../../utils/formulas/CalculationConstructionWorks";
import { useSelector } from "react-redux";


const CalculationConstructionWorks = ({ data, header, heading, tableIndex, tableSlice }) => {
    const descriptionConstructionWorksData = useSelector((state) => {
        return state?.tables[`${tableSlice}`][tableIndex-1].data || {};
    });

    return (<>
        <Table
            header={header}
            rows={data}
            heading={heading}
            calculateFormula={calculationConstructionWorksFormulas(data,descriptionConstructionWorksData)}
            tableSlice={tableSlice}
            tableIndex={tableIndex}
            config={{
                showAddRowButton: false,
                showDeleteTableButton: false
            }}
        />
    </>)
}

export { CalculationConstructionWorks } 
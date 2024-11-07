import React from "react"
import Table from "../../Table/Table";
import { descriptionConstructionWorks } from "../../../utils/formulas/DescriptionConstructionWorks";
import { DescriptionCWObjec } from "./DescriptionCWObjec";

const DescriptionConstructionWorks = ({ data, header, heading, tableIndex, tableSlice }) => {
    return (<>
        <Table
            header={header}
            rows={data}
            heading={heading}
            tableSlice={tableSlice}
            tableIndex={tableIndex}
            calculateFormula={descriptionConstructionWorks(data)}
            createObjectFormula={DescriptionCWObjec}
            config={{
                addRowOptions: {
                    position: data.length - 1, // Insert the row just above the last three rows
                    keyCoeff: 1,
                },
                delteTableOptions: {
                    countAdidtionTable: 1 // Number of additional tables to delete
                }
            }}
        />
    </>)
}

export { DescriptionConstructionWorks } 
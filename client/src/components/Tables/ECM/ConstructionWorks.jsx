import React from "react"
import Table from "../../Table/Table";

const ConstructionWorks = ({ data, header, heading, tableIndex }) => {
    return (<>
        <Table
            header={header}
            rows={data}
            heading={heading}
            tableSlice={"ecm"}
            tableIndex={tableIndex}
            config={{
                showDeleteButton: true,
                delteTableOptions:{
                    countAdidtionTable: 1 // Number of additional tables to delete
                }
            }}
        />
    </>)
}

export { ConstructionWorks } 
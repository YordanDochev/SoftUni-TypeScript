import React from "react"
import { ConstructionWorks } from "./ConstructionWorks";
import { CalculationECM } from "./CalculationECM";
import { AddTable } from "../../AddTable/AddTable";


const ECM = ({ tables }) => {
    if (!tables) {
        return null;
    }

    return (
        <div>
            
            {/* <AddTable tableSlice="ecm" tables={tables} tableMap={tableMap} /> */}
            {tables.map(({ data, header, heading, type }, index) =>
                type === "constructionWorks" ? (
                    <ConstructionWorks
                        data={data}
                        heading={heading}
                        header={header}
                        tableIndex={index}
                    />
                ) : (
                    < CalculationECM
                        data={data}
                        heading={heading}
                        header={header}
                        tableIndex={index}
                    />
                )
            )}
        </div>
    );
}

export { ECM }
import SingleFileUploader from "../../SingleFileUploader/SingleFileUploader";
import Table from "../../Table/Table";

const SummaryHeader = ({ tables }) => {
  const testUrl = "/test-image.jpg";

  return (
    <div>
      <Table
        rows={tables[0].data}
        header={tables[0].header}
        heading={tables[0].heading}
        tableSlice={"summary"}
        tableIndex={0}
      />
      <img src={testUrl} width="1200" height="600" className="p-4" />
      <SingleFileUploader />
      <Table
        rows={tables[1].data}
        header={tables[1].header}
        heading={tables[1].heading}
        tableSlice={"summary"}
        tableIndex={1}
      />
    </div>
  );
};

export { SummaryHeader };

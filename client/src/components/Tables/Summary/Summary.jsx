import { SummaryHeader } from "./SummaryHeader";

const Summary = ({ tables }) => {
  if (!tables) return null;

  return (
    <div>
      <SummaryHeader tables={tables} />
    </div>
  );
};

export { Summary };

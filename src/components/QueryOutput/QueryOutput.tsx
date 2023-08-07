import { getQueryResult } from "./utils";
import { useQueryContext } from "../../contexts/QueryContext";
import useFetchData from "./useFetchData";
import OutputTable from "./OutputTable";

const QueryOutput = () => {
  const {
    queryContext: { query },
  } = useQueryContext();

  const { queryData } = useFetchData();

  const data = getQueryResult(queryData, query);

  const isDataEmpty = data.length === 0;
  if (isDataEmpty && !query) return null;

  if (isDataEmpty && query) {
    alert("No results found for this query");
    return null; 
  }

  return <OutputTable data={data} />;
};

export default QueryOutput;

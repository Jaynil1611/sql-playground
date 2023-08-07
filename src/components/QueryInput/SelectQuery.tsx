import { queries } from "../../constants/constants";
import { useQueryContext } from "../../contexts/QueryContext";

const SelectQuery = () => {
  const { setQueryContext } = useQueryContext();

  const handleQuerySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryContext((state) => ({
      ...state,
      selectedQuery: e.target.value,
      query: "",
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="select-query">
        Choose a query from this list or enter your query below
      </label>
      <select
        id="select-query"
        autoComplete="true"
        autoFocus
        className="border border-solid border-primary p-1"
        onChange={handleQuerySelect}
      >
        {queries.map(({ query: queryName }) => (
          <option key={queryName} value={queryName}>
            {queryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectQuery;

import QueryEditor from "./QueryEditor";
import SelectQuery from "./SelectQuery";

const QueryInput = () => {
  return (
    <div className="flex flex-col gap-6 my-4">
      <SelectQuery />
      <QueryEditor />
    </div>
  );
};

export default QueryInput;

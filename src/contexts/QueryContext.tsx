import { createContext, useContext, useState } from "react";

const QueryContext = createContext(null);

export const useQueryContext = () => useContext(QueryContext);

const QueryContextProvider = ({ children }) => {
  const [queryContext, setQueryContext] = useState({});

  return (
    <QueryContext.Provider value={{ queryContext, setQueryContext }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;

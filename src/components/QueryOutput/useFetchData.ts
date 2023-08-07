import { useState, useEffect } from "react";
import { queries } from "../../constants/constants";

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      import("../../data/data.js").then((res) => {
        const transformedData = queries.map((query) => ({
          ...query,
          result: res[query.name],
        }));
        setData(transformedData);
      });
    } catch (err) {
      console.error(err);
      // do nothing
    }
  }, []);

  return { queryData: data };
};

export default useFetchData;

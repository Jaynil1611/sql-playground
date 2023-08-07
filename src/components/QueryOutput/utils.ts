export const getQueryResult = (queryData, searchQuery) => {
  const queryResult = queryData.find(({ query }) => query === searchQuery);
  if (queryResult) {
    return queryResult.result;
  }
  return [];
};

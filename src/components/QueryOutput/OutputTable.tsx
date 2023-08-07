// @ts-nocheck
import { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { IconButton } from "../Button/Button";
import { pageSizes } from "../../constants/constants";
import FileExport from "./FileExport";
import BackwardIcon from "../../assets/icons/previous.png";
import ForwardIcon from "../../assets/icons/next.png";
import DoubleForwardIcon from "../../assets/icons/double_forward.png";
import DoubleBackwardIcon from "../../assets/icons/double_backward.png";

const OutputTable = ({ data }) => {
  const memoizedData = useMemo(() => {
    const tableData = [...data] as unknown as Array<Record<string, string>>;
    return tableData;
  }, [data]);

  const memoizedColumns = useMemo(() => {
    if (memoizedData.length > 0) {
      return Object.keys(memoizedData[0]).map((key) => ({
        Header: key.replace(/([A-Z])/g, " $1"),
        accessor: key,
      }));
    }
  }, [memoizedData]);

  const {
    getTableBodyProps,
    headerGroups,
    getTableProps,
    prepareRow,
    state,
    page,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
    gotoPage,
    pageCount,
    pageOptions,
    rows,
  } = useTable(
    {
      data: memoizedData,
      columns: memoizedColumns,
    },
    useSortBy,
    usePagination
  );

  const handlePageSizeChange = (e: HTMLSelectElement) => {
    setPageSize(Number(e.target.value));
  };

  if (memoizedData.length === 0) {
    return null;
  }

  return (
    <section>
      <FileExport recordCount={rows.length} tableData={memoizedData} />
      <div className="overflow-x-auto">
        <table
          {...getTableProps}
          className="w-full border-collapse border-b border-gray-300 overflow-auto"
        >
          <thead className="bg-primary">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    scope="col"
                    className="px-4 py-3 text-left whitespace-nowrap text-xs font-medium uppercase tracking-wider text-light"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <span className=" hover:text-gray-300">
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ▼"
                            : " ▲"
                          : ""}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-light align-top divide-y divide-gray-300"
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2.5 text-sm text-primary opacity-70"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex mt-4 gap-4 items-baseline">
        <div className="whitespace-nowrap">
          Page {state.pageIndex + 1} of {pageOptions.length}
        </div>
        <select value={state.pageSize} onChange={handlePageSizeChange}>
          {pageSizes.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <div className="flex m-auto mr-0 gap-3 h-full bg-light">
          <IconButton
            ariaLabel="first page"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <img src={DoubleBackwardIcon} alt="" width="16px" height="16px" />
          </IconButton>
          <IconButton
            ariaLabel="previous page"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <img src={BackwardIcon} alt="" width="16px" height="16px" />
          </IconButton>
          <IconButton
            ariaLabel="next page"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            <img src={ForwardIcon} alt="" width="16px" height="16px" />
          </IconButton>
          <IconButton
            ariaLabel="last page"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <img src={DoubleForwardIcon} alt="" width="16px" height="16px" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default OutputTable;

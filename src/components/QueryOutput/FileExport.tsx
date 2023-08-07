import CsvDownload from "react-json-to-csv";
import ExportIcon from "../../assets/icons/export.png";

const FileExport = ({ recordCount, tableData }) => {
  return (
    <div className="flex gap-4 items-center pb-3">
      <div className="font-semibold text-lg">{recordCount} records found</div>
      <CsvDownload
        className="p-2 leading-5 bg-primary rounded font-semibold text-white"
        data={tableData}
        filename="result.csv"
      >
        <img src={ExportIcon} alt="" width="24px" height="24px" />
      </CsvDownload>
    </div>
  );
};

export default FileExport;

import "../App.css";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomTable({ data, columns }) {
  return (
    <div className="tableContainer">
      <DataGrid autoHeight rows={data} columns={columns} pageSize={10} />
    </div>
  );
}

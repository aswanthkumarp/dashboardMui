import { Paper } from "@mui/material";
import { DashboardWrapper } from "../../components/DashBoardWrapper";
import { DataGrid } from "@mui/x-data-grid";
import GadgetsData from "./gadgets.json";



export function ProductsPage(){
  const rows = GadgetsData;
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
  ];



    return   <DashboardWrapper title="Products">
    <Paper style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10} 
        checkboxSelection
      />
    </Paper>
  </DashboardWrapper>
}
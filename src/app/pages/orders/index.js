import { Paper } from "@mui/material";
import { DashboardWrapper } from "../../components/DashBoardWrapper";
import { DataGrid } from "@mui/x-data-grid";
import GadgetsData from "./gadgets.json";



export function OrdersPage(){
  const rows = GadgetsData;
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'orderQuantity', headerName: 'Order Quantity', type: 'number', width: 150 },
    { field: 'buyerAddress', headerName: 'Buyer Address', width: 250 },
  ];



    return   <DashboardWrapper title="Products">
    <Paper style={{ height: 700, width: '100%' ,alignItems:'center'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10} 
        checkboxSelection
      />
    </Paper>
  </DashboardWrapper>
}
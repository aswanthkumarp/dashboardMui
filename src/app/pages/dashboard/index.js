import * as React from "react";

import { Paper, Grid, Typography, Avatar,Stack } from "@mui/material";


import { DashboardWrapper } from "../../components/DashBoardWrapper";
import { Inventory } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
export function DashboardPage() {
  return (
    <DashboardWrapper title="Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper sx={{ p: 1 }}>
        <PaperItem title="Orders" number="250" color= '#212121' icon={<Inventory/>}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 1 }}>
          <PaperItem title="Users" number="50" color= '#212121' icon={<PersonIcon/>}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 1 }}>  <PaperItem title="Revenue" number="$5000" color= '#212121' icon={<CurrencyExchangeIcon/>}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 1 }}>  <PaperItem title="Refunds" number="$250" color= '#212121' icon={<KeyboardReturnIcon/>}/></Paper>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
}
 const PaperItem = ({title,number,color,icon})=>{
return    <Stack direction="row" spacing={2} alignItems={"center"}>
<Avatar sx={{backgroundColor:'#FF9800'}}>
 {icon}
</Avatar>
  <div>
  <Typography color={color}>{title}</Typography>
  <Typography variant="h5">{number}</Typography>
  </div>
 
</Stack>




 }
import { DashboardWrapper } from "../../components/DashBoardWrapper";
import {
  Paper,
  Stack,
  Typography,
  Switch,
  FormControlLabel,
  Checkbox,
  Button
} from "@mui/material";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ReplayIcon from '@mui/icons-material/Replay';
import PaymentsIcon from '@mui/icons-material/Payments';


export function SettingsPage() {
  return (
    <DashboardWrapper title="Settings">
      <Paper sx={{ p: 3 }}>
       <Stack gap={2}>
       <Stack direction={"row"} alignItems={"center"} gap={1}>
        <CircleNotificationsIcon fontSize="large"/>
          <Typography sx={{ flexGrow: 1 }}>Allow Notification</Typography>
          <Switch defaultChecked />
        </Stack>
         <Stack direction={"row"} alignItems={"center"} gap={1}>
          <ReplayIcon fontSize="large"/>
          <Typography sx={{ flexGrow: 1 }}>Allow Returns</Typography>
          <Switch />
        </Stack>
         <Stack direction={"row"} alignItems={"center"} gap={1}>
     <PaymentsIcon fontSize="large"/>
        <Typography sx={{ flexGrow: 1 }}>Payment Mode</Typography>
        
        <FormControlLabel  control={<Checkbox defaultChecked />} label="Debit Card" />
      
        <FormControlLabel  control={<Checkbox defaultChecked />} label="Debit Card" />
        <FormControlLabel control={<Checkbox  />} label="Credit Card" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />
        <FormControlLabel control={<Checkbox />} label="NetBanking" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Cash On Delivery" />
        </Stack>
        <Button variant="contained" href="/">Save</Button>
       </Stack>
      </Paper>
    </DashboardWrapper>
  );
}

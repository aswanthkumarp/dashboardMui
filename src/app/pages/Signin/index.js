
import { Container, TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function SignInPage() {
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        navigate('/dashboard');
    }

    
  return (
    <div>
      <Container maxWidth="sm">
        <Box 
          sx={{
            marginTop:5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid black",
           
            
          }}
        >
         <Box sx={{margin:"50px" ,display:"flex",flexDirection:"column", alignItems:"center",marginBottom:"80px"}}>
         <Typography sx={{fontFamily:"sans-serif",fontWeight:"bolder"}} variant="h4">SIGN  IN</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{mt:2,alignSelf:'stretch'}}>
          <TextField margin="normal" fullWidth name="email" type="email" label="Enter Email Adress" />
          <TextField margin="normal" fullWidth name="password" type="passwoord" label="Enter Password" />
          <Button fullWidth size="large" type="submit" variant="contained">Enter To Dashboard</Button>
          </Box>
         </Box>
         
        </Box>
      </Container>
    </div>
  );
}

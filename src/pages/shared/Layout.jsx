import { Outlet, Link } from "react-router-dom";
import MU_Container from '@mui/material/Container';
import MU_Box from '@mui/material/Box';

export const LayoutPage = () => {
  return (
    <>
      <MU_Container maxWidth="lg">
        <MU_Box sx={{ bgcolor: '#ffffff', height: '95vh' }} >
           <div style={{paddingTop:"30px", paddingBottom: "20px"}}>
              <h1 style={{textAlign: "center"}}>DGII - Contribuyentes</h1>
           </div>
          <Outlet />
        </MU_Box>
      </MU_Container>    
      
    </>
  )
}

import './TaxpayerList.css'
import {useState} from 'react';
import MU_Table from '@mui/material/Table';
import MU_TableBody from '@mui/material/TableBody';
import MU_TableCell from '@mui/material/TableCell';
import MU_TableContainer from '@mui/material/TableContainer';
import MU_TableHead from '@mui/material/TableHead';
import MU_TablePagination from '@mui/material/TablePagination';
import MU_TableRow from '@mui/material/TableRow';
import MU_Button from '@mui/material/Button';
import MU_LinearProgress  from '@mui/material/LinearProgress';


import { TaxReceiptsDialog } from '../../tax-receipts/dialog/TaxReceiptsDialog';




export const TaxpayerList = ({taxpayers, showLoading}) => {
    
    const [open, setOpen] = useState(false);
    const [selectedTaxPayer, setSelectedTaxPayer] = useState(null);

    
    const handleClickOpen = (taxpayer) => {
        setSelectedTaxPayer(taxpayer);
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };    



      const loadingTableRow =  ( 
        <MU_TableRow>
            <MU_TableCell colSpan={5}>
                <MU_LinearProgress />
            </MU_TableCell>
        </MU_TableRow>
    );    

    let tableBodyRecords;

    tableBodyRecords =  taxpayers.map((taxpayer, index) => {
        return (
            <MU_TableRow key={index}>
                <MU_TableCell>
                    {taxpayer.rncCedula}
                </MU_TableCell>
                <MU_TableCell>
                    {taxpayer.nombre}
                </MU_TableCell>
                <MU_TableCell>
                    {taxpayer.tipo}
                </MU_TableCell>
                <MU_TableCell>
                    {taxpayer.estatus}
                </MU_TableCell>
                <MU_TableCell>
                    <MU_Button variant="outlined" onClick={() =>handleClickOpen(taxpayer) }>
                        Ver Comprobantes
                    </MU_Button>                                            
                </MU_TableCell>
            </MU_TableRow>
        );
    });


    let tableBodyNoRecords;

     tableBodyNoRecords = (
        <MU_TableRow>
            <MU_TableCell style={{textAlign: 'center'}} colSpan={5}>
                No hay registros para mostrar
            </MU_TableCell>
        </MU_TableRow>
    )    


    let tableBodyContent;

    if (taxpayers.length) {
        tableBodyContent = tableBodyRecords;
    }
    else{
        tableBodyContent = tableBodyNoRecords;
    }




      
      
    
    return (
        
        <>
            <MU_TableContainer sx={{ maxHeight: 440 }}>
                <MU_Table stickyHeader aria-label="Contribuyentes" size='small'>
                    <MU_TableHead  style={{fontWeight: 900}}>
                        <MU_TableRow >
                            <MU_TableCell  style={{fontWeight: 900}}>
                                RNC - Cedula
                            </MU_TableCell>
                            <MU_TableCell  style={{fontWeight: 900}}>
                                Nombre
                            </MU_TableCell>
                            <MU_TableCell  style={{fontWeight: 900}}>
                                Tipo
                            </MU_TableCell>
                            <MU_TableCell  style={{fontWeight: 900}}>
                                Estatus
                            </MU_TableCell>
                            <MU_TableCell>                            
                            </MU_TableCell>                            
                        </MU_TableRow>
                    </MU_TableHead>
                    <MU_TableBody>
                    {
                         (!showLoading) ? ( tableBodyContent ) : (loadingTableRow)
                    }                         
                    </MU_TableBody>
                </MU_Table>
            </MU_TableContainer>

            <TaxReceiptsDialog
                selectedTaxPayer={selectedTaxPayer}
                open={open}
                onClose={handleClose}
            ></TaxReceiptsDialog>
        </>
    )
}



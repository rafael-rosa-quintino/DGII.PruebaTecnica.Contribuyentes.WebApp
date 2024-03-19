import {useState, useEffect} from 'react';
import './TaxReceiptsList.css'
import MU_Table from '@mui/material/Table';
import MU_TableBody from '@mui/material/TableBody';
import MU_TableCell from '@mui/material/TableCell';
import MU_TableContainer from '@mui/material/TableContainer';
import MU_TableHead from '@mui/material/TableHead';
import MU_TablePagination from '@mui/material/TablePagination';
import MU_TableRow from '@mui/material/TableRow';
import MU_Card from '@mui/material/Card';
import MU_CardContent from '@mui/material/CardContent';
import MU_LinearProgress  from '@mui/material/LinearProgress';
import TaxPayerApiService from '../../../../services/DGIIApi/taxpayer-service';


export const TaxReceiptsList = ({taxpayer}) => {

    const [showLoading, setShowLoading] = useState(true);
    const [taxReceipts, setTaxReceipts] = useState([]);
    
    const getTaxReceipts =  async (taxpayer)  => {
        await TaxPayerApiService.taxpayers.getTaxReceipts(taxpayer.rncCedula)
            .then(data => {            
                setTaxReceipts(data);
            })
            .catch(err => {
                alert(err)
            });
            setShowLoading(false);
      };

    const loadingTableRow =  ( 
        <MU_TableRow>
            <MU_TableCell colSpan={4}>
                <MU_LinearProgress />
            </MU_TableCell>
        </MU_TableRow>
    );    

    let tableBodyRecords;

    tableBodyRecords = taxReceipts.map((taxReceipt, index) => {
        return (
        <MU_TableRow key={index} >
            <MU_TableCell>
                {taxReceipt.NCF} 
            </MU_TableCell>
            <MU_TableCell style={{textAlign: 'end'}}>
                {(taxReceipt.monto).toFixed(2)}
            </MU_TableCell>
            <MU_TableCell style={{textAlign: 'end'}}>
                {(taxReceipt.itbis18).toFixed(2)}
            </MU_TableCell>
            <MU_TableCell style={{textAlign: 'end'}}>
                { (parseFloat(taxReceipt.monto)  + parseFloat(taxReceipt.itbis18)).toFixed(2)}
            </MU_TableCell>                                                            
        </MU_TableRow>   
        );
    }) 

    let tableBodyResume;

    if (!showLoading && taxReceipts.length) {
        tableBodyResume = (
            <MU_TableRow >
                <MU_TableCell  style={{fontWeight: 900}} >
                    Total:
                </MU_TableCell>                                            
                <MU_TableCell style={{fontWeight: 600, textAlign: 'end'}}>
                    {taxReceipts.map(x=> parseFloat(x.monto)).reduce((p, n) => (p+n)).toFixed(2)}
                </MU_TableCell>
                <MU_TableCell style={{fontWeight: 600, textAlign: 'end'}}>
                    {taxReceipts.map(x=> parseFloat(x.itbis18)).reduce((p, n) => (p+n)).toFixed(2)}
                </MU_TableCell>
                <MU_TableCell style={{fontWeight: 600, textAlign: 'end'}}>
                    {taxReceipts.map(x=> parseFloat(x.monto) + parseFloat(x.itbis18)).reduce((p, n) => (p+n)).toFixed(2)}
                </MU_TableCell>
            </MU_TableRow>   
        )        
    }

    let tableBodyNoRecords;

     tableBodyNoRecords = (
        <MU_TableRow>
            <MU_TableCell style={{textAlign: 'center'}} colSpan={4}>
                No hay registros para mostrar
            </MU_TableCell>
        </MU_TableRow>
    )    


    let tableBodyContent;

    if (taxReceipts.length) {
        tableBodyContent = (
            <>
                {tableBodyRecords}
                {tableBodyResume}
            </>
        )
    }
    else{
        tableBodyContent = tableBodyNoRecords;
    }


    useEffect(() => {
        getTaxReceipts(taxpayer);
    }, [])


    
    

    return (
        <>
            <MU_Card style={{paddingBottom: '20px'}}>
                <MU_CardContent>
                    <MU_TableContainer sx={{ maxHeight: '50%' }}>
                        <MU_Table stickyHeader aria-label="Comprobantes fiscales" size='small' >
                            <MU_TableHead  style={{fontWeight: 900}}>
                                <MU_TableRow >
                                    <MU_TableCell  style={{fontWeight: 900 ,textAlign: 'left !important'}}>
                                        NCF
                                    </MU_TableCell>
                                    <MU_TableCell  style={{fontWeight: 900}}>
                                        Monto
                                    </MU_TableCell>
                                    <MU_TableCell  style={{fontWeight: 900}}>
                                        ITBIS (18%)
                                    </MU_TableCell>
                                    <MU_TableCell  style={{fontWeight: 900}}>
                                        Total
                                    </MU_TableCell>                                                                 
                                </MU_TableRow>
                            </MU_TableHead>
                            <MU_TableBody>
                            {
                                (!showLoading) ? (tableBodyContent) : ( loadingTableRow)
                            }                         
                            </MU_TableBody>
                        </MU_Table>
                    </MU_TableContainer> 
                </MU_CardContent>
            </MU_Card>

        </>
    )    

}



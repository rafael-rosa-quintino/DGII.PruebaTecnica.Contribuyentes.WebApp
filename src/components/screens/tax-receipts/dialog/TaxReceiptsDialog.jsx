import './TaxReceiptsDialog.css'
import MU_DialogTitle from '@mui/material/DialogTitle';
import MU_Dialog from '@mui/material/Dialog';
import { TaxReceiptsList } from '../list/TaxReceiptsList';




export const TaxReceiptsDialog = ({ onClose, selectedTaxPayer, open }) => {
    

    const handleClose = () => {
        onClose();
      };

    return (
        <>
            <MU_Dialog onClose={handleClose} open={open}>
                <MU_DialogTitle>{`${selectedTaxPayer?.nombre} - ${selectedTaxPayer?.rncCedula}`}</MU_DialogTitle>
                <TaxReceiptsList taxpayer={selectedTaxPayer} ></TaxReceiptsList>
            </MU_Dialog>        
        </>
    )  
}

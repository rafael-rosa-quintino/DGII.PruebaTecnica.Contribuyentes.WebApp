
export const URL_BASE = 'https://localhost:7176/api/';

export const Controllers = {
    taxpayers : 'contribuyentes'
};


const DGIIApiPaths = {
    taxpayers : {
        get : `${URL_BASE}${Controllers.taxpayers}/`,
        getTaxReceipts : `${URL_BASE}${Controllers.taxpayers}/{rncCedula}/comprobantes-fiscales/`
    }
};


export default DGIIApiPaths;
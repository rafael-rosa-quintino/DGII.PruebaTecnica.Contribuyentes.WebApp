import DGIIApiPaths from "../../constants/DGIIApi/url-paths";
import HttpClient from '../http/http-client'


const TaxPayerApiService = {

    taxpayers : {
        get :  function () {

            return new Promise((resolve, reject) => {
                HttpClient.get(DGIIApiPaths.taxpayers.get)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
            });      
        },

        getTaxReceipts : function (rncCedula) {

            return new Promise((resolve, reject) => {
                const realUrl = DGIIApiPaths.taxpayers.getTaxReceipts.replace("{rncCedula}", rncCedula);
                HttpClient.get(realUrl)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });

            });         
        }        
    }

};


export default TaxPayerApiService;
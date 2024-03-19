import React from 'react'
import {useState, useEffect} from 'react';
import { TaxpayerList } from '../../components/screens/taxpayer/list/TaxpayerList'
import TaxPayerApiService from '../../services/DGIIApi/taxpayer-service';



export const TaxpayerPage = () => {

 
  const [taxpayers, setTaxpayers] = useState([]);
  const [showLoading, setShowLoading] = useState(true)
  
  const getTaxpayers = async () => {
    await TaxPayerApiService.taxpayers.get()
        .then(data => {                        
            setTaxpayers(data);
        })
        .catch(err =>  {
            alert(err)
        });
      setShowLoading(false);     
  };

    useEffect(() => {
      getTaxpayers();
    }, []);

  


  return (
    <TaxpayerList showLoading={showLoading} taxpayers={taxpayers}/>
  )
}

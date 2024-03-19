import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaxpayerPage } from "./pages/taxpayer/Taxpayer";
import { TaxReceiptsPage } from "./pages/taxpayer/TaxReceipts";
import { LayoutPage } from "./pages/shared/Layout.jsx";

export const TaxpayerApp = () => {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LayoutPage />} >
                  <Route exact path="/" element={<TaxpayerPage />} />
              </Route>
          </Routes>
      </BrowserRouter>

    </>

  )
}

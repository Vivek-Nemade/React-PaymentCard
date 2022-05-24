
import './App.css';
import Paymentcard from './components/Paymentcard';
import React from 'react';
import style from "./components/paymentcard.module.css"

function App() {
  return (
    <div className="App">
        <Paymentcard Date={"28/10/2020"} Logo={"https://pngimg.com/uploads/amazon/small/amazon_PNG27.png"}Gift={"Amazon Gift"} PayType={"Pay"} Machine_OS={"Desktop"} mainstyle={style.yellowcard}/>
        <Paymentcard Date={"28/10/2020"} Logo={"https://pngimg.com/uploads/amazon/small/amazon_PNG27.png"}Gift={"Amazon Gift"} PayType={"Pay"} Machine_OS={"Desktop"} mainstyle={style.yellowcard}/>
        <Paymentcard Date={"17/09/2020"} Logo={"https://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19666.png"}Gift={"Apple Gift"} PayType={"Payment"} Machine_OS={"MacOS"} mainstyle={style.whitecard}/>
    
    </div>
  );
}

export default App;

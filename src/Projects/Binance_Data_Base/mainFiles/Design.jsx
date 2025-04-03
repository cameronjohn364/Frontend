import "./Design.css";

import D1 from "../jsx/D1";
import D2 from "../jsx/D2";
import D3 from "../jsx/D3";
import D4 from "../jsx/D4";
import D5 from "../jsx/D5";




const Design = (
    {
        basePrice,
        profitPercentage,
        stopLossPercentage,
        coinPair,
        profitPrice,
        stopLossPrice,
        valueToVariable,
        BuySellClick,
        winlose,
        dataArray,
        readData,
        DeleteClick,
        AddClick,
        UpdateClick,
    }

    ) => {

    return(

        <div className="BinanceDataBase_Design">

            <D1/>
            <D2 basePrice={basePrice} profitPercentage={profitPercentage} stopLossPercentage={stopLossPercentage} coinPair={coinPair} valueToVariable={valueToVariable}/>
            <D3 BuySellClick={BuySellClick} readData={readData}/>
            <D4 profitPrice={profitPrice} stopLossPrice={stopLossPrice} AddClick={AddClick} />
            <D5 dataArray={dataArray} winlose={winlose} DeleteClick={DeleteClick} UpdateClick={UpdateClick} />
            
        </div>

    );

}

export default Design;
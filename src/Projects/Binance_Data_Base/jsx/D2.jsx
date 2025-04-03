import "../css/D2.css"

const D2 = ({ basePrice, profitPercentage, stopLossPercentage, coinPair, valueToVariable }) => {

    return(

        <div className="BinanceDataBase_D2">
        
            <input type="number" className="i1" value={basePrice} onChange={valueToVariable}/>
            <input type="number" className="i2" value={profitPercentage} onChange={valueToVariable}/>
            <input type="number" className="i3" value={stopLossPercentage} onChange={valueToVariable}/>
            <input type="text" className="i4" value={coinPair} onChange={valueToVariable} placeholder="BTC"/>

        </div>

    );

}

export default D2;
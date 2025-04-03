import "../css/D3.css";

const D3 = ({ BuySellClick }) => {

    return(

        <div className="BinanceDataBase_D3">

            <button className="b1" onClick={BuySellClick} value="BUY">BUY</button>
            <button className="b2" onClick={BuySellClick} value="SELL">SELL</button>
      
        </div>

    );

}

export default D3;
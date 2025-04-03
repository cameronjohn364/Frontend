import "../css/D4.css";

const D4 = ({ profitPrice, stopLossPrice, AddClick }) => {

    return(

        <div className="BinanceDataBase_D4">

            <div className="d1">

                <p className="p1">Profit Target</p>
                <p className="p2">{profitPrice}</p>

            </div>

            <div className="d2">

                <p className="p3">Stop Loss Target</p>
                <p className="p4">{stopLossPrice}</p>
            
            </div>

            <div className="d3">

                <button className="b1" onClick={AddClick}>Add</button>

            </div>

        </div>

    );

}

export default D4;
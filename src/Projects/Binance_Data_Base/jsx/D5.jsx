import "../css/D5.css";

const D5 = ({ dataArray, winlose, DeleteClick, UpdateClick, }) => {

    return(

        <div className="BinanceDataBase_D5">

            <div className="d1">

                <div className="d2">Base Price</div>
                <div className="d2">Profit Price</div>
                <div className="d2">Stop Loss Price</div>
                <div className="d2">Coin Pair</div>
                <div className="d2">Profit %</div>
                <div className="d2">Loss %</div>
                <div className="d2">Date & Time</div>
                <div className="d2">Win/Lose</div>
                <div className="d2">Options</div>

            </div>

            {
                [...dataArray].reverse().map((item, index) => (

                    <div className="d3" key={index} style={{ 
                        backgroundColor: item.winLose === "W" ? "rgb(110, 174, 122)" 
                          : item.winLose === "L" ? "rgb(159, 87, 87)" 
                          : "initial" 
                      }}>

                        <div className="d4">{item.basePrice}</div>
                        <div className="d4">{item.profitPrice}</div>
                        <div className="d4">{item.stopLossPrice}</div>
                        <div className="d4">{item.coinPair}</div>
                        <div className="d4">{item.profitPercentage}</div>
                        <div className="d4">{item.stopLossPercentage}</div>
                        <div className="d4">{item.currentDateTime}</div>
                        <div className="d4 WL" onClick={(e) => {winlose(e);}}>{item.winLose}</div>
                        
                        <div className="d4">

                            <button className="b1" onClick={(e) => UpdateClick(item.basePrice, item.profitPrice, item.stopLossPrice, item.coinPair, item.profitPercentage, item.stopLossPercentage, item.currentDateTime, e.target.closest(".d3").querySelector(".WL").innerText)}>Update</button>
                            
                            <button className="b2" onClick={() => DeleteClick(item.basePrice, item.profitPrice, item.stopLossPrice, item.coinPair, item.profitPercentage, item.stopLossPercentage, item.currentDateTime)}>Delete</button>
                        
                        </div>

                    </div>

                ))
            }

        </div>

    );

}

export default D5;
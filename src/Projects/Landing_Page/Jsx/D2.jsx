import "../Css/D2.css"

const D2 = ({onClickBinanceDataBase}) => {

    return(

        <div className="LandingPage_D2">
        
            <button className="b1" onClick={(e) => onClickBinanceDataBase(e)}>Binance Data Base</button>
            <button className="b2" onClick={(e) => onClickBinanceDataBase(e)}>Ebook Reader</button>

        </div>

    );

}

export default D2;
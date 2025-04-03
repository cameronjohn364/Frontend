import "./Design.css"

import D1 from "../Jsx/D1"
import D2 from "../Jsx/D2";

const Design = ({ onClickBinanceDataBase }) => {

    return(

        <div className="LandingPage_Design">

            <D1/>
            <D2 onClickBinanceDataBase={onClickBinanceDataBase}/>
            
        </div>

    );

}

export default Design;
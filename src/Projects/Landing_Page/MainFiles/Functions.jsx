import Design from "./Design"

import { useNavigate } from "react-router-dom"

const Functions = () => {

    // Variables ===============================================

    const navigate = useNavigate();

    //===============================================

    // onClick Functions ===============================================

    const onClickBinanceDataBase = (e) => {

        if(e.target.className == "b1")
        {
            navigate("/Binance_Data_Base");
        }
        else if(e.target.className == "b2")
        {
            navigate("/Ebook_Reader");
        }
    }

    //===============================================
    return(

        <div className="Functions">

            <Design
            
                onClickBinanceDataBase={onClickBinanceDataBase}

            />
            
        </div>

    );

}

export default Functions;
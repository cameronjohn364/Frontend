import "./Design.css"

import D1 from "../Jsx/D1"
import D2 from "../Jsx/D2";
import D3 from "../Jsx/D3";



const Design = ({extractTextFromPDF}) => {

    return(

        <div className="EbookReaderApp_Design">

            <D1/>
            <D2 extractTextFromPDF={extractTextFromPDF} />
            <D3/>

        </div>

    );

}

export default Design;
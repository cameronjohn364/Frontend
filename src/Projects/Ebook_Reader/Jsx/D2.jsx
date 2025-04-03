import "../Css/D2.css"

import { useState } from "react";

const D2 = ({extractTextFromPDF}) => {


    const [text, setText] = useState("");


    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
      
        if (file) {
            try {
                const extractedText = await extractTextFromPDF(file);  // Wait for result
                setText(extractedText);  // Set the text to the state
            } catch (error) {
                console.error("Error extracting text:", error);
            }
        }
    };
      



    return(

        <div className="EbookReaderApp_D2">

            
            <input type="file" accept="application/pdf" onChange={handleFileUpload} />
            <textarea value={text} readOnly rows="10" cols="50"></textarea>
            

        </div>

    );

}

export default D2;
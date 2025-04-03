import Design from "./Design"

import * as pdfjsLib from "pdfjs-dist";
// Replace this:
// import { workerSrc } from "pdfjs-dist/build/pdf.worker.entry";
// With this:
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;





const Functions = () => {


    const extractTextFromPDF = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = async () => {
                try {
                    const typedarray = new Uint8Array(reader.result);
                    const pdf = await pdfjsLib.getDocument(typedarray).promise;
            
                    let textContent = "";
            
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const text = await page.getTextContent();
                        textContent += text.items.map((item) => item.str).join(" ") + "\n";
                    }
            
                    console.log(textContent);
                    resolve(textContent);  // ✅ Return the extracted text here
                } catch (error) {
                    reject(error);  // Handle any errors that might occur
                }
            };
            
            reader.readAsArrayBuffer(file);
        });
    };
    


    return(

        <Design
        
            extractTextFromPDF={extractTextFromPDF}
        
        />

    );

}

export default Functions;
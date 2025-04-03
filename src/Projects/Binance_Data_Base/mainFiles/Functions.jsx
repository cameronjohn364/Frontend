import React, { useState, useEffect } from 'react';

import Design from "./Design";

const Functions = () => {

    const [dataArray, setDataArray] = useState([]);
    


    const [basePrice, setBasePrice] = useState(0);
    const [profitPrice, setProfitPrice] = useState(0);
    const [stopLossPrice, setStopLossPrice] = useState(0);
    const [coinPair, setCoinPair] = useState("");
    const [profitPercentage, setProfitPercentage] = useState(1.5);
    const [stopLossPercentage, setStopLossPercentage] = useState(1);
    const currentDateTime = new Date().toLocaleString();
	const [winLose, setWinLose] = useState("W/L");




    const readData = async () => {
    
        try
        {
          	console.log("Read Data Started");

          	const response = await fetch('http://localhost:5000/api/readData')
    
   		   	const data = await response.json();
    
          	setDataArray(data.content);

			console.log("Read Data Ended");
        }
        catch(err)
        {
          console.log("myError Frontend readData:" + err);
        }
    
    };



    useEffect(() => {
      readData();
    }, []); // Runs fetchdataArray() once when the component mounts





    const insertData = async () => {

        try
        {
			console.log("insert Data Started");

            await fetch('http://localhost:5000/api/insertData', {
    
                method: "POST",
        
                headers: {
                	'Content-Type': 'application/json'
                },
        
                body: JSON.stringify({
        
					basePrice: parseFloat(basePrice),
					profitPrice: parseFloat(profitPrice),
					stopLossPrice: parseFloat(stopLossPrice),
					coinPair,
					profitPercentage: parseFloat(profitPercentage),
					stopLossPercentage: parseFloat(stopLossPercentage),
					currentDateTime,
					winLose,
        
                })
      
            })

			console.log("insert Data Ended");
    
        }
        catch(err)
        {
          console.log("myError Frontend insertData: " + err);
        }
    };

    const deleteData = async ( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime, winLose ) => {

        try
        {
            console.log("Delete Data Started");

            await fetch('http://localhost:5000/api/deleteData', {
    
                method: "POST",
                
                headers: {
                	'Content-Type': 'application/json'
                },
        
                body: JSON.stringify({
        
					basePrice,
					profitPercentage,
					stopLossPercentage,
					coinPair,
					currentDateTime,
					profitPrice,
					stopLossPrice,
					winLose,
        
                })
            })

            console.log("Delete Data Ended");
        }
        catch(err)
        {
          console.log("FrontEnd deleteData Function Err::: " + err);
        }
    
    }

	const winLoseUpdate = async ( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime, winLose ) => {

		try
		{
			await fetch('http://localhost:5000/api/winloseUpdata', {

				method: "POST",

				headers: {
                	'Content-Type': 'application/json'
                },

				body: JSON.stringify({

					basePrice,
					profitPercentage,
					stopLossPercentage,
					coinPair,
					currentDateTime,
					profitPrice,
					stopLossPrice,
					winLose,
				
				})
			})
		}
		catch(err)
		{
			console.log("winLoseUpdate function error");
		}
	}

    const valueToVariable = (e) => {
  
        if(e.target.className == "i1"){setBasePrice(e.target.value);}
        if(e.target.className == "i2"){setProfitPercentage(e.target.value);}
        if(e.target.className == "i3"){setStopLossPercentage(e.target.value);}
        if(e.target.className == "i4"){setCoinPair(e.target.value.toUpperCase());}
    
    };


    const BuySellClick = (e) => {

		try
		{
			if(e.target.value == "BUY")
			{
				setProfitPrice(parseFloat(basePrice) + (parseFloat(basePrice) * parseFloat(profitPercentage)/100 ));
				setStopLossPrice(parseFloat(basePrice) - ( parseFloat(basePrice) * parseFloat(stopLossPercentage)/100 ));
			}
			else if(e.target.value == "SELL")
			{
				setProfitPrice(parseFloat(basePrice) - ( parseFloat(basePrice) * parseFloat(profitPercentage)/100 ));
				setStopLossPrice(parseFloat(basePrice) + ( parseFloat(basePrice) * parseFloat(stopLossPercentage)/100 ));
			}
		}
		catch(err)
		{
			console.log("BuySellClick function error");
		}
    }

	const AddClick = async () => {

		try
		{
			if (!basePrice || !profitPrice || !stopLossPrice || !coinPair || !profitPercentage || !stopLossPercentage || !currentDateTime || !winLose)
			{
				alert("One or more fields are empty!");
			}
			else
			{
				await insertData();
				await readData();

				setBasePrice(0);
				setProfitPrice(0);
				setStopLossPrice(0);
				setCoinPair("");
			}
		}
		catch(err)
		{
			console.log("AddClick function error");
		}
	}

	const DeleteClick = async ( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime ) => {

		try
		{
			await deleteData( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime );
			await readData();
		}
		catch(err)
		{
			console.log("DeleteClick function error");
		}
	}



    const winlose = (e) => {

        if(e.target.innerText == "W/L"){e.target.innerText = "W"}
        else if(e.target.innerText == "W"){e.target.innerText = "L"}
        else if(e.target.innerText == "L"){e.target.innerText = "W"}
    }

	const UpdateClick = async ( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime, winLose ) => {

		try
		{
			console.log(basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime, winLose);

			await winLoseUpdate( basePrice, profitPrice, stopLossPrice, coinPair, profitPercentage, stopLossPercentage,  currentDateTime, winLose );

			await readData();
		}
		catch(err)
		{
			console.log("UpdateClick function error" + err);
		}
	}



    return(

        <Design
            basePrice={basePrice}
            profitPercentage={profitPercentage}
            stopLossPercentage={stopLossPercentage}
            coinPair={coinPair}
            profitPrice={profitPrice}
            stopLossPrice={stopLossPrice}
            setBasePrice={setBasePrice}
            setProfitPercentage={setProfitPercentage}
            setStopLossPercentage={setStopLossPercentage}
            setCoinPair={setCoinPair}
            valueToVariable={valueToVariable}
            insertData={insertData}
            BuySellClick={BuySellClick}
            winlose={winlose}
            dataArray={dataArray}
            readData={readData}
			DeleteClick={DeleteClick}
			AddClick={AddClick}
			UpdateClick={UpdateClick}
        />

    );

}

export default Functions;
import React from 'react';
import {useEffect, useState} from "react";

export function Data() {
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        const fetchData = async () =>{
            const res = await fetch("http://localhost:3001/api/params/last")
            const dataRes = await res.json();
            setChartData(dataRes);
    	}
    	fetchData();
    }, [])

    if (!chartData) {
        return null;
    }

    return (<div className="container-fluid" >
       <div className="row">
           <div className="col-2">
               <h1>Current state:</h1>
               <ul>
                   <li>Temp: {chartData.temp}</li>
                   <li>Humidity: {chartData.humidity}</li>
                   <li>Pressure: {chartData.pressure}</li>
               </ul>
           </div>
       </div>
   </div>);
}

export default Data;
import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2';
import { getFulfillmentData, getHistoryData, getProcessData, getSubProcessData, getSubProcessItemData, getSupplyPlanningData } from '../../config/apiCalls';

const Assembly = () => {
    const [process , setProcess] = useState([{}]);
    const getAllData = async()=>{
        //const res = await getProcessData();
        //const res = await getSubProcessData();
        //const res = await getSubProcessItemData();
        // const res = await getFulfillmentData();
        //const res = await getHistoryData();
        const res = await getSupplyPlanningData();
        console.log(res);
    }
    useEffect(()=>{
        getAllData();
    },[])
  return (
    <div>
        <Navbar2 />
        
    </div>
  )
}

export default Assembly
import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2';
import { getFulfillmentData, getHistoryData, getProcessData, getSubProcessData, getSubProcessItemData, getSupplyPlanningData } from '../../config/apiCalls';
import styles from './Assembly.module.css'
const Assembly = () => {
    const [process , setProcess] = useState([{}]);
    const getAllData = async()=>{
        const res = await getProcessData();
        //const res = await getSubProcessData();
        //const res = await getSubProcessItemData();
        // const res = await getFulfillmentData();
        //const res = await getHistoryData();
        //const res = await getSupplyPlanningData();
        setProcess(res.data);
        console.log(res);
    }
    useEffect(()=>{
        getAllData();
    },[])
  return (
    <div>
        <Navbar2 />
        <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Process Table</div>

          <table className={styles.borderedTable}>
            

              <tr>
                <th>orderId</th>
                <th>resourceId</th>
                <th>runTime</th>
                <th>setupTime</th>
              </tr>

            
                {
                    process.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    process.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.orderId}</td>
                            <td>{item.resourceId}</td>
                            <td>{item.runTime}</td>
                            <td>{item.setupTime}</td>
              
                        </tr>
                    ))
                }
                    </>
                }
                
             
              

            
          </table>

      </div>
    </div>
  )
}

export default Assembly
import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'

import { getAllBom, getAllItems, getAllManufacturing, getFulfillmentData, getHistoryData, getSubProcessData, getSubProcessItemData, getSupplyPlanningData } from "../../config/apiCalls";
import styles from './Forcast.module.css'

const Forcast = () => {
    const [fulfillment , setFulfillment] = useState([{}]);
    const [histroy , setHistroy] = useState([{}]);
    const [supplyPlanningData , setSupplyPlanningData] = useState([{}]);
    const getAllData = async()=>{
         const res1 = await getFulfillmentData();
        const res2 = await getHistoryData();
        const res3 = await getSupplyPlanningData();
        setFulfillment(res1.data);
        setHistroy(res2.data);
        setSupplyPlanningData(res3.data);
        
        
        console.log(res3.data);
        
      }
    useEffect(()=>{
        getAllData();
    },[])

  return (
    <div>
        <Navbar2 />

        <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Fulfillment</div>
        
          <table  className={styles.borderedTable}>
            
              <tr>
                <th>orderQuantity</th>
                <th>shippedQuantity</th>
                <th>shippingDate</th>
                <th>shippingMethod</th>
                <th>trackingNumber</th>

              </tr>
            
            
                {
                    fulfillment.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    fulfillment.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.orderQuantity}</td>
                            <td>{item.shippedQuantity}</td>
                            <td>{item.shippingDate}</td>
                            <td>{item.shippingMethod}</td>
                            <td>{item.trackingNumber}</td>
                            
                        </tr>
                    ))
                }
                    </>
                }
                
             
              
        
            
          </table>

      </div>

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Histroy</div>

          <table className={styles.borderedTable}>
            

              <tr>
                <th>orderStatus</th>
                <th>commentsOrNotes</th>
                <th>createdAt</th>
                <th>statusDate</th>
              </tr>
                {
                    histroy.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    histroy.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.orderStatus}</td>
                            <td>{item.commentsOrNotes}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.statusDate}</td>
                            
                        </tr>
                    ))
                }
                    </>
                }
                
             
              

            
          </table>

      </div>

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>SupplyPlanningData</div>

          <table className={styles.borderedTable}>
            

              <tr>
                <th>actualDemand</th>
                <th>avaiableInventory</th>
                <th>forecastedDemand</th>
                <th>leadTime</th>
                <th>orderDate</th>
                <th>orderQuantity</th>
                <th>receivedDate</th>

              </tr>
                {
                    supplyPlanningData.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    supplyPlanningData.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.actualDemand}</td>
                            <td>{item.avaiableInventory}</td>
                            <td>{item.forecastedDemand}</td>
                            <td>{item.leadTime}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.orderQuantity}</td>
                            <td>{item.receivedDate}</td>
                            
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

export default Forcast
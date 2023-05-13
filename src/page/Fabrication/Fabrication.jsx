import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./Fabrication.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getAllBom, getAllItems, getAllManufacturing } from "../../config/apiCalls";

const Fabrication = () => {
    const [items , setItems] = useState([{}]);
    const [manufacturing , setManufacturing] = useState([]);
    const [bom , setBom] = useState([{}]);

    const getData = async() =>{
        const res = await getAllItems();
        setItems(res.data);
        const res2 = await getAllManufacturing();
        setManufacturing(res2.data);
        const res3 = await getAllBom();
        setBom(res3.data);
        
        console.log(res2.data)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
      <Navbar2 />

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Items</div>
       
          <table className={styles.borderedTable}>
            
            
              <tr>
                <th>unitOfMeasure</th>
                <th>weight</th>
                <th>dimensions</th>
                <th>price</th>
                <th>supplierId</th>
                <th>leadTime</th>
              </tr>
            
           
                {
                    items.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    items.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.unitOfMeasure}</td>
                            <td>{item.weight}</td>
                            <td>{item.dimensions}</td>
                            <td>{item.price}</td>
                            <td>{item.supplierId}</td>
                            <td>{item.leadTime}</td>
                        </tr>
                    ))
                }
                    </>
                }
                
             
              
            
            
          </table>
      
      </div>

      <div className={styles.ManufacturingContainer}>
        <div className={styles.heading}>Manufacturing</div>
        
          <table className={styles.borderedTable}>
            
              <tr>
                <th>productionCost</th>
                <th>productionQuantity</th>
                <th>scrapPercentage</th>
                <th>startDate</th>
                <th>endDate</th>
              </tr>

  
                {
                    manufacturing.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    manufacturing.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.productionCost}</td>
                            <td>{item.productionQuantity}</td>
                            <td>{item.scrapPercentage}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                        </tr>
                    ))
                }
                    </>
                }
                
              
              

            
          </table>

      </div>

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Bills Of Management</div>
       
          <table className={styles.borderedTable}>
            
            
              <tr>
                <th>SupplierId</th>
                <th>componentDescription</th>
                <th>componentName</th>
                <th>cost</th>
                <th>isDefault</th>
                <th>leadTime</th>
                <th>unitOfMeasure</th>
              </tr>
           
           
                {
                    bom.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    bom.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.SupplierId}</td>
                            <td>{item.componentDescription}</td>
                            <td>{item.componentName}</td>
                            <td>{item.cost}</td>
                            <td>{item.isDefault ? "TRUE" : "FALSE"}</td>
                            <td>{item.leadTime}</td>
                            <td>{item.unitOfMeasure}</td>
                        </tr>
                    ))
                }
                    </>
                }
                
             
              
          
            
          </table>
        
      </div>

    </div>
  );
};

export default Fabrication;

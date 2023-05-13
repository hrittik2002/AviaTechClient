import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
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
import { getAllBom, getAllItems, getAllManufacturing, getSubProcessData, getSubProcessItemData } from "../../config/apiCalls";
import styles from './SubAssembly.module.css'

const SubAssembly = () => {
    const [subProcess , setSubProcess] = useState([{}]);
    const [subProcessItem , setSubProcessItem] = useState([{}]);

    const getAllData = async()=>{
        //const res = await getProcessData();
        //console.log(res);
        const res1 = await getSubProcessData();
        //console.log(res1.data);
        setSubProcess(res1.data);

        const res2 = await getSubProcessItemData();
        setSubProcessItem(res2.data);
        console.log(res2.data)
      }
    useEffect(()=>{
        getAllData();
    },[])
  return (
    <div>
        <Navbar2 />

        <div className={styles.ItemsContainer}>
        <div className={styles.heading}>SubProcess</div>
        
          <table  className={styles.borderedTable}>
            
              <tr>
                <th>machineOrToolUsed</th>
                <th>operatorId</th>
                <th>operatorName</th>
                <th>processId</th>
                <th>resourceId</th>
                <th>updatedAt</th>
              </tr>
            
            
                {
                    subProcess.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    subProcess.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.machineOrToolUsed}</td>
                            <td>{item.operatorId}</td>
                            <td>{item.operatorName}</td>
                            <td>{item.processId}</td>
                            <td>{item.resourceId}</td>
                            <td>{item.updatedAt}</td>
                        </tr>
                    ))
                }
                    </>
                }
                
             
              
        
            
          </table>

      </div>

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>SubProcessItems</div>

          <table className={styles.borderedTable}>
            

              <tr>
                <th>componentDescription</th>
                <th>componentId</th>
                <th>componentName</th>
                <th>createdAt</th>
                <th>requiredQuantity</th>
                <th>unitOfMeasure</th>
              </tr>

            
                {
                    subProcessItem.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    subProcessItem.map((item , idx)=>(
                        
                        <tr key={idx}>
                            <td>{item.componentDescription}</td>
                            <td>{item.componentId}</td>
                            <td>{item.componentName}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.requiredQuantity}</td>
                            <td>{item.unitOfMeasure}</td>
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

export default SubAssembly
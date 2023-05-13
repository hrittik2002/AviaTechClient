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
        <TableContainer className={styles.tableContainer}>
          <Table variant='striped' colorScheme='teal' className={styles.table}>
            
            <Thead className={styles.thead}>
              <Tr>
                <Th>unitOfMeasure</Th>
                <Th>weight</Th>
                <Th>dimensions</Th>
                <Th>price</Th>
                <Th>supplierId</Th>
                <Th>leadTime</Th>
              </Tr>
            </Thead>
            <Tbody className={styles.tbody}>
                {
                    items.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    items.map((item , idx)=>(
                        
                        <Tr key={idx}>
                            <Td>{item.unitOfMeasure}</Td>
                            <Td>{item.weight}</Td>
                            <Td>{item.dimensions}</Td>
                            <Td>{item.price}</Td>
                            <Td>{item.supplierId}</Td>
                            <Td>{item.leadTime}</Td>
                        </Tr>
                    ))
                }
                    </>
                }
                
             
              
            </Tbody>
            
          </Table>
        </TableContainer>
      </div>

      <div className={styles.ManufacturingContainer}>
        <div className={styles.heading}>Manufacturing</div>
        <TableContainer className={styles.tableContainer}>
          <Table variant="simple" className={styles.table}>
            
            <Thead className={styles.thead}>
              <Tr>
                <Th>productionCost</Th>
                <Th>productionQuantity</Th>
                <Th>scrapPercentage</Th>
                <Th>startDate</Th>
                <Th>endDate</Th>
              </Tr>
            </Thead>
            <Tbody className={styles.tbody}>
                {
                    manufacturing.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    manufacturing.map((item , idx)=>(
                        
                        <Tr key={idx}>
                            <Td>{item.productionCost}</Td>
                            <Td>{item.productionQuantity}</Td>
                            <Td>{item.scrapPercentage}</Td>
                            <Td>{item.startDate}</Td>
                            <Td>{item.endDate}</Td>
                        </Tr>
                    ))
                }
                    </>
                }
                
              
              
            </Tbody>
            
          </Table>
        </TableContainer>
      </div>

      <div className={styles.ItemsContainer}>
        <div className={styles.heading}>Bills Of Management</div>
        <TableContainer className={styles.tableContainer}>
          <Table variant="simple" className={styles.table}>
            
            <Thead className={styles.thead}>
              <Tr>
                <Th>SupplierId</Th>
                <Th>componentDescription</Th>
                <Th>componentName</Th>
                <Th>cost</Th>
                <Th>isDefault</Th>
                <Th>leadTime</Th>
                <Th>unitOfMeasure</Th>
              </Tr>
            </Thead>
            <Tbody className={styles.tbody}>
                {
                    bom.length === 0 ?
                    "no data found"
                    :
                    <>
                    {
                    bom.map((item , idx)=>(
                        
                        <Tr key={idx}>
                            <Td>{item.SupplierId}</Td>
                            <Td>{item.componentDescription}</Td>
                            <Td>{item.componentName}</Td>
                            <Td>{item.cost}</Td>
                            <Td>{item.isDefault ? "TRUE" : "FALSE"}</Td>
                            <Td>{item.leadTime}</Td>
                            <Td>{item.unitOfMeasure}</Td>
                        </Tr>
                    ))
                }
                    </>
                }
                
             
              
            </Tbody>
            
          </Table>
        </TableContainer>
      </div>

    </div>
  );
};

export default Fabrication;

import React, { useEffect, useState } from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'

const SubAssembly = () => {
    const [process , setProcess] = useState([{}]);
    const getAllData = async()=>{
        //const res = await getProcessData();
        //console.log(res);
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

export default SubAssembly
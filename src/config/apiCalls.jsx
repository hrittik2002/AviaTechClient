import axios from 'axios';

// get all items
export const getAllItems = async() =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/item/viewAll`)
         console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

// get all manufacturing
export const getAllManufacturing = async() => {
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/manufacturing/getAll`)
         console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}
// get all 
export const getAllBom = async() => {
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/bom/getAll`)
         console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

// get process 
export const getProcessData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/process/getAll`)
         console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

// get sub process
export const getSubProcessData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/subProcess/getAll`)
         console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

//http://127.0.0.1:5000/api/subProcessItem/add
export const getSubProcessItemData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/subProcessItem/getAll`)
        console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}
//http://127.0.0.1:5000/api/fulfillment/getAll
export const getFulfillmentData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/fulfillment/getAll`)
        console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}
///api/HistoryData
export const getHistoryData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/HistoryData/getAll`)
        console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

// 
export const getSupplyPlanningData = async(req, res) =>{
    try{
        const res = await axios.get(`http://127.0.0.1:5000/api/SupplyPlanning/getAll`)
        console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}
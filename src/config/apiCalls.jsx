import axios from 'axios';
//http://127.0.0.1:5000
const domainName = 'https://washing-machine-supply-chain-rest-api-ihmq.vercel.app';

// get all items
export const getAllItems = async() =>{
    try{
        const res = await axios.get(`${domainName}/api/item/viewAll`)
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
        const res = await axios.get(`${domainName}/api/manufacturing/getAll`)
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
        const res = await axios.get(`${domainName}/api/bom/getAll`)
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
        const res = await axios.get(`${domainName}/api/process/getAll`)
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
        const res = await axios.get(`${domainName}/api/subProcess/getAll`)
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
        const res = await axios.get(`${domainName}/api/subProcessItem/getAll`)
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
        const res = await axios.get(`${domainName}/api/fulfillment/getAll`)
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
        const res = await axios.get(`${domainName}/api/HistoryData/getAll`)
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
        const res = await axios.get(`${domainName}/api/SupplyPlanning/getAll`)
        console.log(res);
        return res;
      }
      catch(err){
        console.log(err);
      }
}

export const loginApiCall = async(username , password , type) =>{
  try{
      const res = await axios.post(`${domainName}/api/login/${type}`,
      {
        email : username ,
        password : password
      }
      )
      console.log(res);
      return res;
    
      
    }
    catch(err){
      console.log(err);
    }
}
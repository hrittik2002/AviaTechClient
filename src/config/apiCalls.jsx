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
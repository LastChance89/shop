import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
const url = process.env.REACT_APP_BACKEND_URL


export const  postRequest  = async(data:String): Promise<any> =>{
    axios.defaults.baseURL = url;
    const options = { 
        headers: {"content-type": "application/json"}
    };
   return await  axios.post("/router/login",data,options).then(response => response.data);

}
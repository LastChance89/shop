import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
const url = process.env.REACT_APP_BACKEND_URL


export const  postRequestLogin  = async(data:String): Promise<any> =>{
    axios.defaults.baseURL = url;
    //axios.defaults.withCredentials = true;
    const options = { 
        headers: {"content-type": "application/json"}
    };
   return await  axios.post("/router/login",data,options).then(response => response.data);

}

//used for other reuqests will fix later. 
export const  postRequest  = async(data:String): Promise<any> =>{
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true;
    const options = { 
        headers: {"content-type": "application/json"}
    };
   return await  axios.post("/router/login",data,options).then(response => response.data);

}
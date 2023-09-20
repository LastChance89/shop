import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';
const url = process.env.REACT_APP_BACKEND_URL


export const  postRequestLogin  = async(data:String): Promise<any> =>{
    axios.defaults.baseURL = url;
   axios.defaults.withCredentials = true;
    const options = { 
        headers: {"content-type": "application/json"}
    };
   return await  axios.post("/router/login",data,options).then(response => response.data);

}


export const  postRequest  = async(data:String, endpoint: String): Promise<any> =>{
    axios.defaults.baseURL = url;
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization';

    const options = { 
        headers: {"content-type": "application/json"}
    };

    return await  axios.post("/router/"+endpoint,data,options).then(response => response.data);
  


}
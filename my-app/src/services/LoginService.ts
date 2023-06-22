import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
      /*
      Reference file on class. 
class LoginService{

    public async userLogin(userName: String, password: String){
        axios.defaults.baseURL = "http://127.0.0.1:3001";
        let success = false;
        const options = {
            headers: {"content-type": "application/json"}
        };
        const data = JSON.stringify({
            username: userName,
            password: password
        })
       
       return await  axios.post("/router/test",data,options).then(response => response.data);
 
       axios.post("/router/test",data,options).then((response: AxiosResponse)=>{
           
            if(response.data.lenght === 0){
                success = true;
            }
        })
        .catch((error: AxiosError)=>{
            console.log(error);
        })
       // console.log(success)
       // return success;
        
    }
}

export default new LoginService();
 */
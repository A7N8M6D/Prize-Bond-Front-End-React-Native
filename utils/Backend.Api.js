import axios from "axios";
import { APibackend } from "../constants";

export const  ApiBackend= async( {methode ,route,endpoint,data})=>{
    console.log("data", data)
try{
const {res}=await axios[methode](`${APibackend}/${route}/${endpoint}`,data);
return res;
}catch(error)
{
alert(error.response.data.message)
throw error
}
}
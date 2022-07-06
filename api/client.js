import axios from "axios";

// getting the token if there a math

export const axiosClientU  = axios.create({
    timeout:20000,
    headers:{
        token:process.env.NEXT_PUBLIC_TOKEN,
        "content-type":'multipart/form',
        authorization:process.env.NEXT_PUBLIC_AUTHORIZATION,
        "Access-Control-Allow-Origin":'*'
    }},
    
)
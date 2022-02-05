import axios from "axios";

export const key = "93de07bcf9656b001a82ba471862ff8ea77c6e28"
// minha chave bity 93de07bcf9656b001a82ba471862ff8ea77c6e28


const api = axios.create({
 baseURL: 'https://api-ssl.bitly.com/v4/',
 headers:{
     'Authorization': `Bearer ${key}`
 }
});

export default api;

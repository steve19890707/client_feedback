import axios from "axios";
import { API_URL } from "./configs/APIUrl";
import { PROMO_ID } from "./configs/index";

axios.defaults.withCredentials = true;

// 新增反饋
export const apiCreate = (data)=> {
  return axios.post(`${API_URL}/frontend/feedback/create`,data,{
    headers: { token: PROMO_ID }   
  }) 
};
// 反饋標籤列表
export const apiInit = (params)=> { 
  return axios.get(`${API_URL}/frontend/feedback/init`,{ 
    headers: { token: PROMO_ID },
    params
  })
};
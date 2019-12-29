import axios from 'axios';

export function getToken() {
  return localStorage.getItem("token");
};

export default function() {
  return axios.create({
    baseURL : "#", //base API URL will go here
    headers : {
      Authorization : getToken()
    }
  });
};
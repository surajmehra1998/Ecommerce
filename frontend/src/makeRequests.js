import axios from "axios";

// export const options = {
//   method: "GET",
//   params: { categoryID: "aps", keyword: "iphone", country: "US", page: "1" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_API_TOKEN,
//     "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
//   },
// };

// export const fetchData = async (url, actions) => {
//   const resp = await fetch(url, actions);
//   const data = await resp.json();
//   return data;
// };

// export const api = axios.create({
//   method: "GET",
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_API_TOKEN,
//     "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
//   },
// });

// export const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f82971bca6msh00542d02a604239p189da8jsn70f86937b604",
//     "X-RapidAPI-Host": "asos2.p.rapidapi.com",
//   },
// };

export const options = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
};

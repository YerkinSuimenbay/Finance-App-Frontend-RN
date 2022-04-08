import axios from "axios"
// AXIOS SETTINGS
// export const REACT_APP_BASE_URL = 'https://y-finance-app-backend.herokuapp.com/api/v1'
export const BASE_URL = 'https://y-finance-app-backend.herokuapp.com/api/v1'
// axios.defaults.baseURL = REACT_APP_BASE_URL;
// console.log( REACT_APP_BASE_URL);
// if (localStorage && localStorage.token) {
//     const access_token = localStorage.getItem('token');
//     axios.defaults.headers.common['Authorization'] = `Token ${access_token}`
// }
axios.defaults.headers.post['Content-Type'] = 'application/json'
import axios from 'axios';


const axiosClient = axios.create({
    baseURL: "https://test-referralportal-api20210514150629.azurewebsites.net/api",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export default axiosClient;
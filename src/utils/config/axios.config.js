import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        baseURL: 'https://ob-fiverr-backend.herokuapp.com/api',
        responseType: 'json',
        timeout: 6000
    }
)
import axios from "axios";
const baseUrl = 'https://www.omdbapi.com/?apikey=a6abe46b';

export const apiCall = ( url, data, headers, method ) => axios({
    method,
    url: baseUrl+url,
    data,
    headers
})
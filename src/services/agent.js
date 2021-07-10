import axios from 'axios';
import { trackPromise } from "react-promise-tracker";

axios.defaults.baseURL = 'https://5f55a98f39221c00167fb11a.mockapi.io/';

const responseBody = (response) => response.data;


const requests = {
    get: (url, params) => axios.get(url, { params }).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody)
};

const Blogs = {
    list: (condition) => trackPromise(requests.get('/blogs', condition)),
    details: (id) => trackPromise(requests.get(`/blogs/${id}`)),
}

const agent = {
    Blogs
}

export default agent;
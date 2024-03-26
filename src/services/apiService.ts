import axios from "axios";
import {Authorization, baseURL} from "../constants";

const apiService = axios.create({
        baseURL
    }
)
apiService.interceptors.request.use(
    (request) => {
        request.headers.Authorization = `Bearer ${Authorization}`
        return request
    }, (error) => {
        return Promise.reject(error)
    }
)

apiService.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error);
    }
);

export {apiService}
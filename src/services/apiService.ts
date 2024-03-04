import axios from "axios";
import {Authorization, baseURL} from "../constants";


const apiService = axios.create({
        baseURL,
        headers: {Authorization}
    }
)
export {apiService}



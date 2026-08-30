import axios from "axios";
import { TOKEN } from "../utils/constant.js"
import { store } from "../store/store.js"

const BASE_URL = "http://localhost:5002"

const setupInterceptor = () => {
    axios.defaults.baseURL = BASE_URL

    axios.interceptors.request.use(
        (config) => {

            const token = localStorage.getItem(TOKEN)

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config
        },

        (error) => {
            Promise.reject(error)
        }
    )
    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    )
}

export default setupInterceptor
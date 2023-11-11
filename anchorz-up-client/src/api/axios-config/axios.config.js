import axios from "axios";
import env from "../../environment.config";

const axiosConfig = axios.create({
    baseURL: `${env.api_url}api/`
});

export {
    axiosConfig
};
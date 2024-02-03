import axios from "axios";
import { config } from "localforage";

const instance = axios.create({
baseURL: 'http://localhost:4444',
});

axios.defaults.headers.common["Authorization"] = window.localStorage.getItem('token');

export default instance;
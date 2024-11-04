import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export default function (endpoint, payload) {
  if (endpoint) {
    let request_data = endpoint;
    if (endpoint.method == "POST" || endpoint.method == "PUT") {
      request_data.data = payload;
    } else {
      request_data.params = payload;
    }
    return axios(request_data);
  } else {
    console.warn("Pass arguments endpoint to the api() function");
  }
}

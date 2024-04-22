import axios from "axios";

import { getFromCookie } from "../utils/storage";

const callApi = ({
	url = "",
	method = "GET",
	data = {}, // body
	params = {}, // query
	contentType = "application/json",
}) => {
	// eslint-disable-next-line no-undef
	const baseURL = "http://localhost:5800/api/"
	// create axiosInstance
	const axiosInstance = axios.create({
		baseURL,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*",
			"Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMzE5MDI3MSwiZXhwIjoxNzEzNzk1MDcxfQ.G1R79SotPfqaQkBxtEb57uOxKEVjOJkdw8eHT9Xx6sU"
			// Accept: "application/json",
			// "Accept-Language": "en",
			// "Api-Version": "1.0",
		},
	});
	// set request configs
	const token = getFromCookie("access_token");
	axiosInstance.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			let customConfig = Object.assign({}, config, {
				contentType,
				withCredentials: false, // send token with credentials
			});
			// return
			return customConfig;
		},
		(err) => {
			throw err;
		},
	);
	//  set response configs
	axiosInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		(err) => {
			if (err?.response?.status) {
				// errorServiceCodeMessage(err?.response?.status);
			}
			return err;
		},
	);
	// return
	return new Promise((resolve, reject) => {
		axiosInstance({ url, method, params, data })
			.then((res) => {
				resolve(res?.data);
			})
			.catch((e) => {
				reject(e);
			});
	});
};

export default callApi;

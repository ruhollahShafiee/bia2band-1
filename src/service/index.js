import axios from "axios";

import { getFromStorage } from "../utils/storage";

const callApi = async ({
	url = "",
	method = "GET",
	data = {},
	params = {},
	contentType = "application/json; charset=utf-8", // "application/json",
	responseType = "json",
}) => {
	// eslint-disable-next-line no-undef
	const baseURL = process.env.REACT_APP_BACKEND_SERVER;
	// create axiosInstance
	const axiosInstance = axios.create({
		baseURL,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*",
			"Accept-Language": "en",
			"Api-Version": "1.0",
			Accept: "application/json",
		},
	});
	// set request configs
	const token = getFromStorage("app-token");
	axiosInstance.interceptors.request.use(
		(config) => {
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			let customConfig = Object.assign({}, config, {
				contentType,
				responseType,
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
	return await new Promise((resolve, reject) => {
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

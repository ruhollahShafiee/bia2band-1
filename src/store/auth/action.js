import { jwtDecode } from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setToCookie, getFromCookie } from "@/utils/storage";
import { mockData } from "@/service/main/transformer";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }) => {
	const token = getFromCookie("access_token")
	if (!token) return { user: mockData["artist"] }
	const { id } = jwtDecode(token)
	return await callApi({ url: `artist/${id}` })
		.then(({ token, ...response }) => {
			setToCookie("access_token", token);
			return { user: response };
		})
		.catch(() => ({ user: null }));
});

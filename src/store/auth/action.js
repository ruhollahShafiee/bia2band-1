import { createAsyncThunk } from "@reduxjs/toolkit";

import { setToCookie, removeFromCookie } from "@/utils/storage";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }, _thunkAPI) => {
	return await callApi({ url: "user/whoAmI" })
		.then(({ token, ...response }) => {
			setToCookie("access_token", token);
			return { user: response };
		})
		.catch((_error) => ({ user: null }));
});

export const clearCurrentUser = createAsyncThunk("auth/clearUser", async ({ callApi }, _thunkAPI) => {
	return await callApi({ url: "auth/signOut", method: "POST" })
		.then(() => {
			removeFromCookie("access_token");
			return { user: null };
		})
		.catch((_error) => ({ user: null }));
});

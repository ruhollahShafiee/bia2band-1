import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk("auth/currentUser", async ({ callApi }, _thunkAPI) => {
	return await callApi({ url: "user/whoAmI" })
		.then((response) => ({ user: response }))
		.catch((_error) => ({ user: null }));
});

export const clearCurrentUser = createAsyncThunk("auth/clearUser", async ({ callApi }, _thunkAPI) => {
	return await callApi({ url: "auth/signOut", method: "POST" })
		.then(() => ({ user: null }))
		.catch((_error) => ({ user: null }));
});

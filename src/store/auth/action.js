import { jwtDecode } from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { artist, allArtist } from "@/service/main";
import { setToCookie, getFromCookie } from "@/utils/storage";
import { mockData } from "@/service/main/transformer";
import callApi from "@/service";

export const getCurrentUser = createAsyncThunk(
	"auth/currentUser", 
	async ({ callApi }) => {
	const token = getFromCookie("access_token")
	const { id } = { id: 1 }
	return await artist(callApi,id)
});

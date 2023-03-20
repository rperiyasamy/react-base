import axios from "axios";
import { authconstants } from "../constants/authConstants";

export const auth = (value) => async (dispatch) => {
	await dispatch({
		type: authconstants.REQUEST,
		payload: { loading: true },
	});
	try {
		const { data } = await axios.get(`ENDPOINT`);
		localStorage.setItem("ACCESS_TOKEN", data.accessToken);
		localStorage.setItem("REFRESH_TOKEN", data.refreshToken);
		localStorage.setItem("ROLE", data?.role);

		await dispatch({
			type: authconstants.SUCCESS,
			payload: { loading: false, data },
		});
		window.location.href = "/loading"


	} catch (error) {
		await dispatch({
			type: authconstants.ERROR,
			payload: { loading: false },
		});
	}
};

export const refreshToken = async (refereshtoken) => {
	try {
		const { data } = await axios.post(`ENDPOINT`, {
			refreshtoken: refereshtoken,
		});
		if (data.success === 1) {
			localStorage.setItem("ACCESS_TOKEN", data.token);
			localStorage.setItem("REFERESH_TOKEN", data.refreshtoken);
		}
	} catch (error) {
		console.error(error);
	}
};
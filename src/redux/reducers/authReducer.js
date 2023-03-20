import { authconstants } from "../constants/authConstants";
let initialValues = {
	getauth: [],
};

export const authReducer = (value = initialValues, action) => {
	switch (action?.type) {
		case authconstants.REQUEST:
			return { getauth: action?.payload };
		case authconstants.SUCCESS:
			return { getauth: action?.payload };
		case authconstants.ERROR:
			return { getauth: action?.payload };
		default:
			return value;
	}
};
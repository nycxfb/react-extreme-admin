export const setToken = (token: string) => ({
	type: "SET_TOKEN",
	token
});

export const userLogOut = () => ({
	type: "USER_LOGOUT"
});

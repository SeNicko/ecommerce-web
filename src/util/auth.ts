export interface LoginBody {
	email: string;
	password: string;
}

export const login = async (body: LoginBody) => {
	try {
		// Login user and get response back
		const response = await fetch("http://localhost:3000/users/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body) // send user data
		});

		// Convert response to json format
		const data = await response.json();
		return data;
	} catch (err) {
		// This should be handled in better way
		console.log("error", err);
	}
};

export interface RegisterBody {
	email: string;
	password: string;
}

export const register = async (body: RegisterBody) => {
	try {
		// Login user and get response back
		const response = await fetch("http://localhost:3000/users/register", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body) // Send user data to the server
		});

		// Convert response to json
		const data = await response.json();
		return data;
	} catch (err) {
		// This should be handled in better way
		console.log("error", err);
	}
};

export const logout = () => {
	try {
		// Remove cookie
		fetch("http://localhost:3000/users/logout", {
			method: "POST",
			credentials: "include"
		});
	} catch (err) {
		// This should be handled in better way
		console.log("error", err);
	}
};

export const getRefreshToken = async () => {
	try {
		// Ask for refresh token
		const response = await fetch("http://localhost:3000/token-refresh", {
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		});

		// convert response to json format
		const data = await response.json();
		return data;
	} catch (err) {
		// This should be handled in better way
		console.log("error", err);
	}
};

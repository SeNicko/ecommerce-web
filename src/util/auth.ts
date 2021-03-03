export interface LoginBody {
	email: string;
	password: string;
}

export const login = async (body: LoginBody) => {
	try {
		const response = await fetch("http://localhost:3000/users/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		});

		const data = await response.json();
		return data;
	} catch (err) {
		console.log("error", err);
	}
};

export interface RegisterBody {
	email: string;
	password: string;
}

export const register = async (body: RegisterBody) => {
	try {
		const response = await fetch("http://localhost:3000/users/register", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		});

		const data = await response.json();
		return data;
	} catch (err) {
		console.log("error", err);
	}
};

export const getRefreshToken = async () => {
	try {
		const response = await fetch("http://localhost:3000/token-refresh", {
			headers: {
				"Content-Type": "application/json"
			},
			credentials: "include"
		});

		const data = await response.json();
		return data;
	} catch (err) {
		console.log("error", err);
	}
};

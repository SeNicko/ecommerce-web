import { FunctionComponent, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRefreshToken, logout } from "../util/auth";
import { UserContext } from "../context/userContext";

const AuthBar: FunctionComponent = () => {
	const { logged, userEmail, setLogged, setUserEmail, setAccessToken } = useContext(UserContext);

	const checkIfIsLogged = async () => {
		const data = await getRefreshToken();

		if (!data.error) {
			setLogged!(true);
			// Set user email
			setUserEmail!(data.userEmail);
			// Set access token for api calls
			setAccessToken!(data.accessToken);
		} else {
			// Handle error
		}
	};

	const logoutUser = async () => {
		await logout();
		setLogged!(false);
		setUserEmail!(null);
		setAccessToken!(null);
	};

	// On component load check if user is logged
	useEffect(() => {
		checkIfIsLogged();
	}, [logged]);

	return (
		<section className="auth-status">
			{logged ? (
				<>
					<span>{userEmail}</span>
					<span className="auth-status__spacer">|</span>
					<button className="auth-status__logout" onClick={logoutUser}>
						log out
					</button>
				</>
			) : (
				<>
					<Link className="auth-status__link" to="/register">
						register
					</Link>
					<span className="auth-status__spacer">|</span>
					<Link className="auth-status__link" to="/login">
						login
					</Link>
				</>
			)}
		</section>
	);
};

export default AuthBar;

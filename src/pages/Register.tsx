import { FormEvent, FunctionComponent, useContext, useState } from "react";
import "../scss/pages/login.scss";
import { RouteComponentProps } from "react-router-dom";
import { register, RegisterBody } from "../util/auth";
import { UserContext } from "../context/userContext";

const Register: FunctionComponent<RouteComponentProps> = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setAccessToken, setLogged, setUserEmail } = useContext(UserContext);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const body: RegisterBody = {
			email,
			password
		};

		const data = await register(body);

		if (data.error) {
			// Handle error someway
		} else {
			setAccessToken!(data.accessToken);
			setLogged!(true);
			setUserEmail!(data.userEmail);
			history.push("/");
		}
	};

	return (
		<section className="login">
			<h1>Register</h1>
			<form className="login__form" onSubmit={handleSubmit}>
				<input
					className="login__input"
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="login__input"
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="login__submit" type="submit">
					Register
				</button>
			</form>
		</section>
	);
};

export default Register;

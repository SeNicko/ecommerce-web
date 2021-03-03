import { createContext, FunctionComponent, useMemo, useState } from "react";

interface IUserContext {
	logged: boolean;
	setLogged?: React.Dispatch<React.SetStateAction<boolean>>;
	accessToken: null | string;
	setAccessToken?: React.Dispatch<React.SetStateAction<null>>;
	userEmail: string | null;
	setUserEmail?: React.Dispatch<React.SetStateAction<null>>;
}

export const UserContext = createContext<IUserContext>({
	logged: false,
	accessToken: null,
	userEmail: null
});

export const UserContextProvider: FunctionComponent = ({ children }) => {
	const [logged, setLogged] = useState(false);
	const [accessToken, setAccessToken] = useState(null);
	const [userEmail, setUserEmail] = useState(null);

	const userContextProviderValue = useMemo(
		() => ({ logged, setLogged, accessToken, setAccessToken, userEmail, setUserEmail }),
		[logged, accessToken, userEmail]
	);

	return <UserContext.Provider value={userContextProviderValue}>{children}</UserContext.Provider>;
};

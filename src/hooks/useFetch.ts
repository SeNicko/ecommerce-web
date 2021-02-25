import { clear } from "console";
import { useEffect, useState } from "react";

const useFetch = <T>(url: string): [T | null, boolean, boolean] => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const clearState = () => {
		setData(null);
		setIsLoading(false);
		setError(false);
	};

	useEffect(() => {
		clearState();
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					setError(true);
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch(() => {
				setError(true);
			})
			.finally(() => setIsLoading(false));
	}, [url]);

	return [data, isLoading, error];
};

export default useFetch;

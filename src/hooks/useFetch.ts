import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					setError(true);
				}
				return res.json();
			})
			.then((data) => {
				setIsLoading(false);
				setData(data);
			})
			.catch(() => {
				setIsLoading(false);
				setError(true);
			});
	}, [url]);

	return [data, isLoading, error];
};

export default useFetch;

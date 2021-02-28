export interface ICategory {
	name: string;
	slug: string;
	children: ICategory[] | null;
}

export interface IProduct {
	name: string;
	description: string;
	price: number;
	images: {
		url: string;
		alt: string;
	}[];
	slug: string;
}

export interface IResourceRequest<T> {
	data: T[];
}

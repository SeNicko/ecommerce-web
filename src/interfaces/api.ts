export interface Category {
	name: string;
	slug: string;
	children: Category[] | null;
}

export interface Product {
	name: string;
	description: string;
	price: number;
	images: {
		url: string;
		alt: string;
	}[];
	slug: string;
}

export interface Category {
	name: string;
	slug: string;
	sub: Category[] | null;
}

export interface Product {
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	slug: string;
}

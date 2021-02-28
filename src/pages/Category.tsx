import "../scss/pages/category.scss";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Checkbox from "../components/Checkbox";
import { Product, ResourceRequest } from "../interfaces/api";
import { useEffect, useState } from "react";

interface CategoryPageParams {
	categorySlug: string;
}

const Category = () => {
	const { categorySlug } = useParams<CategoryPageParams>();
	const [products, isLoading, error] = useFetch<ResourceRequest<Product>>(
		`http://localhost:3000/categories/${categorySlug}/products?type=slug`
	);

	const [mobileToggled, setMobileToggled] = useState(false);

	return (
		<div className="wall">
			<header className="wall__header">
				<button
					className="wall__header-button"
					onClick={() => setMobileToggled(!mobileToggled)}
				>
					filter
				</button>
			</header>
			<section className="wall__content">
				<aside className={`filter ${mobileToggled ? "filter--mobile-shown" : ""}`}>
					<button
						className="filter__close-mobile"
						onClick={() => setMobileToggled(!mobileToggled)}
					>
						close
					</button>
					<section className="filter__section">
						<h3 className="filter__title">Price</h3>
						<Checkbox label="$0 - $25" onChange={(e) => console.log(e)} />
						<Checkbox label="$25 - $50" onChange={(e) => console.log(e)} />
						<Checkbox label="$50 - $100" onChange={(e) => console.log(e)} />
					</section>
					<section className="filter__section">
						<h3 className="filter__title">Material</h3>
						<Checkbox label="Cotton" onChange={(e) => console.log(e)} />
						<Checkbox label="Fleece" onChange={(e) => console.log(e)} />
						<Checkbox label="Jersey" onChange={(e) => console.log(e)} />
					</section>
					<section className="filter__section">
						<h3 className="filter__title">Brand</h3>
						<Checkbox label="$0 - $25" onChange={(e) => console.log(e)} />
						<Checkbox label="$0 - $25" onChange={(e) => console.log(e)} />
						<Checkbox label="$0 - $25" onChange={(e) => console.log(e)} />
					</section>
				</aside>
				<section className="products">
					{isLoading && <span>Loading products</span>}
					{error && (
						<span>Something went wrong! Are you looking for a existing products?</span>
					)}
					{products?.data &&
						products.data.map((product: any, i: number) => (
							<ProductCard product={product as Product} key={i} />
						))}
				</section>
			</section>
		</div>
	);
};

export default Category;

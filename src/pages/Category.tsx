import "../scss/pages/category.scss";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Checkbox from "../components/Checkbox";
import { IProduct, IResourceRequest } from "../interfaces/api";
import { useEffect, useState } from "react";
import { apiUri } from "../config/api";

interface CategoryPageParams {
	categorySlug: string;
}

const Category = () => {
	const { categorySlug } = useParams<CategoryPageParams>();
	const [products, isLoading, error] = useFetch<IResourceRequest<IProduct>>(
		`${apiUri}/categories/${categorySlug}/products?type=slug`
	);

	const [mobileToggle, setMobileToggle] = useState(false);

	const toggleMobileFilter = () => {
		setMobileToggle(!mobileToggle);

		// Toggle ability to scroll page depending on mobileToggle
		if (mobileToggle) {
			document.body.style.overflow = "visible";
		} else {
			document.body.style.overflow = "hidden";
		}
	};

	return (
		<div className="wall">
			<header className="wall__header">
				<button className="wall__header-button" onClick={toggleMobileFilter}>
					filter
				</button>
			</header>
			<section className="wall__content">
				<aside className={`filter ${mobileToggle ? "filter--mobile-shown" : ""}`}>
					<button className="filter__close-mobile" onClick={toggleMobileFilter}>
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
						<Checkbox label="Nike" onChange={(e) => console.log(e)} />
						<Checkbox label="Jordan" onChange={(e) => console.log(e)} />
						<Checkbox label="Other" onChange={(e) => console.log(e)} />
					</section>
				</aside>
				<section className="products">
					{isLoading && <span>Loading products</span>}
					{error && (
						<span>Something went wrong! Are you looking for a existing products?</span>
					)}
					{products?.data &&
						products.data.map((product: any, i: number) => (
							<ProductCard product={product as IProduct} key={i} />
						))}
				</section>
			</section>
		</div>
	);
};

export default Category;

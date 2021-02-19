import "../scss/pages/category.scss";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Product } from "../interfaces/api";

interface CategoryPageParams {
	categorySlug: string;
}

const Category = () => {
	const { categorySlug } = useParams<CategoryPageParams>();
	const [data, isLoading, error] = useFetch(
		`http://localhost:3000/categories/${categorySlug}/products?type=slug`
	);

	return (
		<section className="product-list">
			{isLoading && <span>Loading products</span>}
			{error && <span>Something went wrong!</span>}
			{data &&
				data.data.map((product: any, i: number) => (
					<ProductCard product={product as Product} key={i} />
				))}
		</section>
	);
};

export default Category;

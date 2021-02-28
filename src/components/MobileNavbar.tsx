import "../scss/components/mobileNavbar.scss";
import { useState, FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/icons/chevron-right.svg";
import { ReactComponent as LeftArrow } from "../assets/icons/chevron-left.svg";
import { ICategory } from "../interfaces/api";

interface MobileNavbarButtonProps {
	primary: boolean;
	content: string;
}

const MobileNavbarButton: FunctionComponent<MobileNavbarButtonProps> = ({
	primary,
	content,
	children
}) => {
	return (
		<button
			className={`nav-mobile__menu-button ${primary && "nav-mobile__menu-button--primary"}`}
		>
			<span
				className={`nav-mobile__menu-button-content ${
					primary && "nav-mobile__menu-button-content--primary"
				}`}
			>
				{content}
			</span>
			{children}
		</button>
	);
};

interface MobileNavbarProps {
	categories: ICategory[];
	toggled: boolean;
	toggle: () => void;
}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = ({ toggled, toggle, categories }) => {
	const [nest, setNest] = useState<number[]>([]);
	const [displayedCategories, setDisplayedCategories] = useState<ICategory[]>([]);
	const [parentCategory, setParentCategory] = useState<ICategory>();

	// Go next in category tree
	const next = (level: number) => setNest([...nest, level]);

	// Go back in category tree
	const prev = () => {
		const newNest = [...nest];
		newNest.pop();
		setNest(newNest);
	};

	useEffect(() => setNest([]), [toggled]);

	useEffect(() => {
		// set current categories to all categories
		let currentCategories: ICategory[] = categories;

		// For each nest level
		nest.forEach((nestLevel) => {
			// Check if category have children and update parent and current categories
			if (currentCategories[nestLevel].children) {
				setParentCategory(currentCategories[nestLevel]);
				currentCategories = currentCategories[nestLevel].children as ICategory[];
			}
		});

		// Update current categories and rerender component
		setDisplayedCategories(currentCategories);
	}, [nest, categories]);

	return (
		<>
			<div className={`nav-mobile ${toggled && "nav-mobile--shown"}`}>
				{nest.length > 0 && (
					<>
						<button className="nav-mobile__back-button" onClick={prev}>
							<LeftArrow width="15" height="15" />
							<span className="nav-mobile__back-button-content">Back</span>
						</button>
						{parentCategory?.name && (
							<span className="nav-mobile__category-name">{parentCategory.name}</span>
						)}
					</>
				)}
				<ul className="nav-mobile__menu">
					{nest.length > 0 && (
						<li className="nav-mobile__menu-item">
							<Link to={`/category/${parentCategory?.slug}`} onClick={toggle}>
								<MobileNavbarButton
									primary={false}
									content={`See all ${parentCategory?.name}`}
								></MobileNavbarButton>
							</Link>
						</li>
					)}
					{displayedCategories.map(({ name, slug, children }, i) => (
						<li className="nav-mobile__menu-item" onClick={() => next(i)} key={i}>
							{children ? (
								<MobileNavbarButton primary={nest.length === 0} content={name}>
									<RightArrow width="15" height="15" />
								</MobileNavbarButton>
							) : (
								<Link to={`/category/${slug}`} onClick={toggle}>
									<MobileNavbarButton primary={false} content={name} />
								</Link>
							)}
						</li>
					))}
				</ul>
				{nest.length === 0 && (
					<div className="nav-mobile__actions">
						<Link to="/cart"></Link>
					</div>
				)}
			</div>
			<div
				className={`nav-mobile-scrim ${toggled ? "nav-mobile-scrim--shown" : ""}`}
				onClick={toggle}
			/>
		</>
	);
};

export default MobileNavbar;

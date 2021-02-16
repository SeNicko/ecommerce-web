import "../scss/mobile-navbar.scss";
import { useState, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/icons/chevron-right.svg";
import { ReactComponent as LeftArrow } from "../assets/icons/chevron-left.svg";
import { Category } from "../interfaces/api";

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
	categories: Category[];
	toggled: boolean;
	toggle: () => void;
}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = ({ toggled, toggle, categories }) => {
	const [nest, setNest] = useState<number[]>([]);

	// Go next in category tree
	const next = (level: number) => setNest([...nest, level]);

	// Go back in category tree
	const prev = () => {
		const newNest = [...nest];
		newNest.pop();
		setNest(newNest);
	};

	// Get categories which should display at the moment
	const getMobileShownCategories = () => {
		let currentCategories: Category[] = categories;

		nest.forEach((nestLevel) => {
			if (currentCategories[nestLevel].children) {
				// TODO: Set parent category name here somehow
				currentCategories = currentCategories[nestLevel].children as Category[];
			}
		});

		return currentCategories;
	};

	return (
		<>
			<div className={`nav-mobile ${toggled && "nav-mobile--shown"}`}>
				{nest.length > 0 && (
					<>
						<button className="nav-mobile__back-button" onClick={prev}>
							<LeftArrow width="25" height="25" />
							<span className="nav-mobile__back-button-content">Back</span>
						</button>
						{nest.length > 0 && (
							<span className="nav-mobile__category-name">Category name</span>
						)}
					</>
				)}
				<ul className="nav-mobile__menu">
					{getMobileShownCategories().map(({ name, slug, children }, i) => (
						<li className="nav-mobile__menu-item" onClick={() => next(i)} key={i}>
							{children ? (
								<MobileNavbarButton primary={nest.length === 0} content={name}>
									<RightArrow width="25" height="25" />
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
				className={"nav-mobile-scrim " + (toggled ? "nav-mobile-scrim--shown" : "")}
				onClick={toggle}
			/>
		</>
	);
};

export default MobileNavbar;

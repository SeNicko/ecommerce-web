import "../scss/components/navbar.scss";
import { Link } from "react-router-dom";
import { FunctionComponent, useEffect, useState } from "react";
import { ICategory } from "../interfaces/api";
import MobileNavbar from "./MobileNavbar";

import { ReactComponent as Bag } from "../assets/icons/bag.svg";
import { ReactComponent as List } from "../assets/icons/burger.svg";

const Navbar: FunctionComponent = () => {
	const [mobileToggle, setMobileToggle] = useState(false);

	// This should be fetched from the server (hardcoded for now)
	const categories: ICategory[] = [
		{
			name: "Men",
			slug: "men",
			children: [
				{
					name: "Shoes",
					slug: "men-shoes",
					children: [
						{
							name: "Casual shoes",
							slug: "men-football-shoes",
							children: null
						},
						{
							name: "Football shoes",
							slug: "men-football-shoes",
							children: null
						},
						{
							name: "Moutain shoes",
							slug: "men-football-shoes",
							children: null
						},
						{
							name: "Running shoes",
							slug: "men-football-shoes",
							children: null
						}
					]
				},
				{
					name: "Clothes",
					slug: "men-clothes",
					children: [
						{
							name: "Tops & T-shirts",
							slug: "men-tops-and-t-shirts",
							children: null
						},
						{
							name: "Trousers and pants",
							slug: "men-football-shoes",
							children: null
						}
					]
				},
				{
					name: "Accessories & equipment",
					slug: "men-accesories-and-equipment",
					children: [
						{
							name: "Bags & Backpacks",
							slug: "men-bags-and-backpacks",
							children: null
						},
						{
							name: "Hats",
							slug: "men-hats",
							children: null
						},
						{
							name: "Gloves",
							slug: "men-gloves",
							children: null
						}
					]
				}
			]
		},
		{
			name: "Women",
			slug: "women",
			children: [
				{
					name: "Shoes",
					slug: "women-shoes",
					children: [
						{
							name: "Football shoes",
							slug: "women-football-shoes",
							children: null
						}
					]
				}
			]
		},
		{
			name: "Children",
			slug: "children",
			children: [
				{
					name: "Shoes",
					slug: "children-shoes",
					children: [
						{
							name: "Football shoes",
							slug: "children-fotball-shoes",
							children: null
						}
					]
				}
			]
		}
	];

	const toggleMobileNav = () => {
		setMobileToggle(!mobileToggle);

		// Toggle ability to scroll page depending on mobileToggle
		if (mobileToggle) {
			document.body.style.overflow = "visible";
		} else {
			document.body.style.overflow = "hidden";
		}
	};

	return (
		<header className="header">
			<div className="header__section header__section--left">
				<Link to="/" className="header__logo">
					Niko
				</Link>
			</div>
			<nav className="header__section">
				<MobileNavbar
					toggle={toggleMobileNav}
					toggled={mobileToggle}
					categories={categories}
				/>
				<div className="nav-desktop">
					<ul className="nav-desktop__menu">
						{categories &&
							categories.map((category, i) => (
								<li className="nav-desktop__menu-item" key={i}>
									<Link
										to={`/category/${category.slug}`}
										className="nav-desktop__menu-link"
									>
										{category.name}
									</Link>
									<div className="dropdown">
										{category.children &&
											category.children.map((category, i) => (
												<ul className="dropdown__list" key={i}>
													<li className="dropdown__item">
														<Link
															className="dropdown__link dropdown__link--header"
															to={`/category/${category.slug}`}
														>
															{category.name}
														</Link>
													</li>
													{category.children &&
														category.children.map((category, i) => (
															<li className="dropdown__item" key={i}>
																<Link
																	className="dropdown__link"
																	to={`/category/${category.slug}`}
																>
																	{category.name}
																</Link>
															</li>
														))}
												</ul>
											))}
									</div>
								</li>
							))}
					</ul>
				</div>
			</nav>
			<div className="header__section header__section--right">
				<Link aria-label="shopping bag" to="/cart" className="header__actions-link">
					<Bag />
				</Link>
				<button
					className="header__nav-mobile-toggle header__actions-button"
					aria-label="toggle mobile navbar"
					onClick={toggleMobileNav}
				>
					<List />
				</button>
			</div>
		</header>
	);
};

export default Navbar;

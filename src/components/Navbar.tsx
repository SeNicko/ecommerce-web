import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import { FunctionComponent, useState } from "react";
import { Category } from "../interfaces/api";
import MobileNavbar from "./MobileNavbar";

import { ReactComponent as Bag } from "bootstrap-icons/icons/bag.svg";
import { ReactComponent as List } from "bootstrap-icons/icons/list.svg";

const Navbar: FunctionComponent = () => {
	const [mobileToggle, setMobileToggle] = useState(false);

	// This should be fetched from the server (hardcoded for now)
	const categories: Category[] = [
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
			name: "Woman",
			slug: "woman",
			children: [
				{
					name: "Shoes",
					slug: "woman-shoes",
					children: [
						{
							name: "Football shoes",
							slug: "woman-football-shoes",
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

		if (mobileToggle) {
			document.body.style.overflow = "visible";
		} else {
			document.body.style.overflow = "hidden";
		}
	};

	return (
		<header className="header">
			<div className="header__logo">
				<span>Niko</span>
			</div>
			<nav className="nav">
				{mobileToggle && (
					<MobileNavbar
						toggle={toggleMobileNav}
						toggled={mobileToggle}
						categories={categories}
					/>
				)}
				<div className="nav-desktop">
					<ul className="nav-desktop__menu"></ul>
				</div>
			</nav>
			<div className="header__actions">
				<Link to="/cart" className="header__actions-item">
					<Bag />
				</Link>
				<button
					className="header__nav-mobile-toggle button header__actions-item"
					onClick={toggleMobileNav}
				>
					<List />
				</button>
			</div>
		</header>
	);
};

export default Navbar;

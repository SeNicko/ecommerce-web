import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { Category } from "../interfaces/api";

// Navbar item
interface NavbarItemProps {
	to: string;
	name: string;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({ to, name, children }) => {
	return (
		<li className="menu__item">
			<Link to={to} className="menu__link">
				{name}
			</Link>
			{children}
		</li>
	);
};

// Dropdown item
interface DropdownItemProps {
	name: string;
	to: string;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({ name, to }) => {
	return (
		<li className="dropdown__item">
			<Link to={to} className="dropdown__link">
				{name}
			</Link>
		</li>
	);
};

// Navbar dropdown
interface NavbarDropdown {
	data: Category[];
}

const Dropdown: FunctionComponent<NavbarDropdown> = ({ data }) => {
	return (
		<ul className="dropdown">
			{data &&
				data.map((category, i) => (
					<DropdownItem to={category.slug} name={category.name} key={i} />
				))}
		</ul>
	);
};

// Navbar
interface NavbarProps {
	data: Category[];
}

const Navbar: FunctionComponent<NavbarProps> = ({ data }) => {
	return (
		<header className="header">
			<nav className="nav">
				<div className="nav__logo">
					<span>Niko</span>
				</div>
				<ul className="menu">
					{data &&
						data.map((category, i) => (
							<NavbarItem name={category.name} to={category.slug} key={i}>
								{category.sub && <Dropdown data={category.sub} />}
							</NavbarItem>
						))}
				</ul>
				<div className="nav__cart">
					<Link to="/cart">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-bag"
							viewBox="0 0 16 16"
						>
							<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
						</svg>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;

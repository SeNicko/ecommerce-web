import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import { FunctionComponent, useState } from "react";
import { Category } from "../interfaces/api";

// Navbar
interface NavbarProps {
	data: Category[];
}

const Navbar: FunctionComponent<NavbarProps> = ({ data }) => {
	const [mobileToggle, setMobileToggle] = useState(false);

	const toggleMobileNav = () => {
		setMobileToggle(!mobileToggle);

		// Disable or enable page scroll depending on nav toggle
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
				<div className={"nav-mobile " + (mobileToggle ? "nav-mobile--shown" : "")}>
					<ul className="nav-mobile__menu">
						<li className="nav-mobile__menu-item">
							<Link className="nav-mobile__menu-link" to="/">
								Men
							</Link>
						</li>
					</ul>
					<div className="nav-mobile__actions">
						<Link to="/cart">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="currentColor"
								className="bi bi-bag"
								viewBox="0 0 16 16"
							>
								<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
							</svg>
						</Link>
					</div>
				</div>
				<div
					className={
						"nav-mobile-scrim " + (mobileToggle ? "nav-mobile-scrim--shown" : "")
					}
					onClick={toggleMobileNav}
				/>
				<div className="nav-desktop">
					<ul className="nav-desktop__menu"></ul>
				</div>
			</nav>
			<div className="header__actions">
				<Link to="/cart">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						className="bi bi-bag"
						viewBox="0 0 16 16"
					>
						<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
					</svg>
				</Link>
				<button className="header__nav-mobile-toggle button" onClick={toggleMobileNav}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						className="bi bi-justify"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Navbar;

import { FunctionComponent } from "react";

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

export default MobileNavbarButton;

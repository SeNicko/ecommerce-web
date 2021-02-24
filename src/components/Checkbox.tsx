import "../scss/components/checkbox.scss";
import { FunctionComponent, useState } from "react";
import { ReactComponent as Ok } from "../assets/icons/ok.svg";

interface CheckboxProps {
	label: string;
	onChange: (e: boolean) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, onChange }) => {
	const [checked, setChecked] = useState(false);

	// Toggle checkbox
	const toggle = () => {
		setChecked(!checked);
		onChange(checked);
	};

	return (
		<div className="check-box" onClick={toggle}>
			<span className={`check-box__box ${checked ? "check-box__box--checked" : ""}`}>
				{checked && <Ok className="check-box__icon" />}
			</span>
			<span className="check-box__label">{label}</span>
		</div>
	);
};

export default Checkbox;

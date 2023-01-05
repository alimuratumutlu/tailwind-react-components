import React, {useMemo} from "react";

export default function PrimaryButton({ children, disabled, onClick, color }) {

	const buttonClass = useMemo(() => {
		let buttonClasses = [`w-full inline-grid rounded-lg px-7 py-3  text-white font-medium text-sm leading-snug shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`];

		if (color) {
			buttonClasses.push(`bg-${color}-600 hover:bg-${color}-700 focus:bg-${color}-700 active:bg-${color}-800 `);
		}

		return buttonClasses.join(" ");
	}, [color]);

	return (
		<button
			type="submit"
			className={buttonClass}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

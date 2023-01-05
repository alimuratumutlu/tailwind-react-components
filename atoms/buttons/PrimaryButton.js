import React, {useMemo} from "react";

export default function PrimaryButton( children, disabled, onClick, color ) {

	const buttonClass = useMemo(() => {
		let buttonClasses = [`w-full inline-grid rounded-lg px-7 py-3 mb-4 font-medium text-sm leading-snug shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-${color}-500 hover:bg-${color}-600 focus:bg-${color}-600 active:bg-${color}-700 `];

		if (color === "white") {
			buttonClasses.push(`text-gray-900`);
		} else {
			buttonClasses.push(`text-white `);
		}

		console.log(buttonClasses.join(" "), "buttonclasses")

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

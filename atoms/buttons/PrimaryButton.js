import React from "react";

export default function PrimaryButton({ children, disabled, onClick,color }) {
	return (
		<button
			type="submit"
			className={`w-full rounded-lg px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug shadow-md hover:bg-${color}-700 hover:shadow-lg focus:bg-${color}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${color}-800 active:shadow-lg transition duration-150 ease-in-out`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

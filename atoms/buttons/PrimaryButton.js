import React from "react";

export default function PrimaryButton({ children, disabled, onClick }) {
	return (
		<button
			type="submit"
			className="w-full block rounded-lg px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

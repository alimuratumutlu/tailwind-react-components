import React, { memo } from "react";

interface PrimaryButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
}

const PrimaryButton = ({ children, disabled }: PrimaryButtonProps) => {
	return (
		<button
			type="submit"
			className={`group w-full inline-grid rounded-lg px-7 py-3 mb-4 font-medium text-sm leading-snug shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 text-white`}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default memo(PrimaryButton);

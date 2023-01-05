import React, { memo } from "react";

interface DefaultButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
}

const DefaultButton = ({ children, disabled }: DefaultButtonProps) => {
	return (
		<button
			type="submit"
			className={`group w-full inline-grid rounded-lg px-7 py-3 mb-4 font-medium text-sm leading-snug shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-white-500 hover:bg-white-600 focus:bg-white-600 active:bg-white-700 text-gray-700`}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default memo(DefaultButton);

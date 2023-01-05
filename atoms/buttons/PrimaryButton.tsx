/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

interface PrimaryButtonProps {
    buttonText: string
    disabled?: boolean
    onClick?: (item: any) => Promise<Response | undefined>
}

export default function PrimaryButton({
    buttonText,
    disabled,
    onClick,
}: PrimaryButtonProps) {
    return (
        <button
            type="button"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            disabled={disabled}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}

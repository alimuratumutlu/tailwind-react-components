import React from "react"

interface DefaultInputProps {
    id: string
    placeHolder?: string
    type?: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => Promise<void> | unknown
    value?: string
}

export default function DefaultInput({
    id,
    placeHolder,
    type,
    onChange,
    value,
}: DefaultInputProps) {
    return (
        <input
            type={type}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id={id}
            placeholder={placeHolder}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e)}
            value={value}
        />
    )
}

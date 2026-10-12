import type { ComponentProps } from "react"

type InputProps = ComponentProps<"input">

export function Input({ ...rest }: InputProps) {
    return (
        <input 
            className="h-13 w-full bg-gray-500 border border-gray-700 rounded-lg p-4 outline-none
             text-gray-100 text-base placeholder:text-gray-300 focus:border-purple-dark" 
            {...rest} 
        />
    )
}
import type { ComponentProps, ReactNode } from "react"

type ButtonProps = ComponentProps<"button"> & {
    children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button
            className="inline-flex justify-center items-center bg-blue-dark h-13 p-4 gap-2 rounded-lg cursor-pointer text-gray-100 font-bold text-sm transition-colors hover:bg-blue [&_svg:not([class*='size-'])]:size-4"
            {...rest}
        >
            {children}
        </button>
    )
}
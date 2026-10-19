import type { ReactNode } from "react"

type BadgeProps = {
    children: ReactNode
}

export function Badge({ children }: BadgeProps) {
    return (
        <span className="inline-flex justify-center items-center px-2 py-0.5 bg-gray-400 text-gray-200 font-bold text-xs rounded-full shrink-0">
            {children}
        </span>
    )
}
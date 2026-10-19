import { CheckIcon } from "lucide-react";
import type { ComponentProps } from "react";

type CheckboxProps = ComponentProps<'input'>

export function Checkbox({ ...rest }: CheckboxProps) {
    return (
        <label className="group size-4 border-2 border-blue rounded-full inline-flex items-center justify-center shrink-0 cursor-pointer transition-colors hover:bg-blue-dark/20 has-checked:bg-purple-dark has-checked:border-purple-dark has-checked:hover:bg-purple has-checked:hover:border-purple">
            <input type="checkbox" className="sr-only" {...rest} />
            <CheckIcon className="size-2.5 text-gray-100 opacity-0 group-has-checked:opacity-100" />
        </label>
    )
}
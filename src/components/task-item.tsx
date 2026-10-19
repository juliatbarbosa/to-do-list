import { Trash2Icon } from "lucide-react";
import { Checkbox } from "./checkbox";

export function TaskItem() {
    return (
        <div className="group/card flex items-start bg-gray-500 p-4 rounded-lg border border-gray-400 gap-3 shadow-[0_2px_8px_0_rgba(0,0,0,0.06)]">
            <div className="flex justify-center items-center size-6">
                <Checkbox />
            </div>
            <span className="flex-1 text-sm text-gray-100 group-has-checked/card:line-through group-has-checked/card:text-gray-300">
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </span>
            <button className="group/button inline-flex justify-center items-center shrink-0 size-6 cursor-pointer hover:bg-gray-400 rounded-sm transition-colors">
                <Trash2Icon className="text-gray-300 size-3.5 group-hover/button:text-danger transition-colors"/>
            </button>
        </div>
    )
}
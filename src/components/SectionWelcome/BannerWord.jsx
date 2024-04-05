import clsx from "clsx";
import { Diamond } from "lucide-react";

export default function BannerWord({word}) {
    // state
    // comportement
    // render
    return (
        <li className={clsx(
            // Flexbox
            "flex items-center",
        )}>
            <p className={clsx(
                // Font
                "uppercase font-trispace font-semibold text-9xl text-white tracking-tight",
                // Spacing
                "mr-16",
            )}>
                {word}
            </p>
            
            <Diamond className="text-indigo-400 stroke-2 fill-indigo-400" />
        </li>
    )
}
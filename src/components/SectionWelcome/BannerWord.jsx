import clsx from "clsx";
import { Diamond } from "lucide-react";
import { useEffect, useState } from "react";

export default function BannerWord({word}) {
    // state
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

    // Effect to update isPhone when window width changes
    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // comportement
    // render
    return (
        <li className={clsx(
            // Flexbox
            "flex items-center",
        )}>
            <p className={clsx(
                // Font
                "uppercase font-trispace font-semibold text-9xl dark:text-white text-black tracking-tight",
                isPhone ? "text-8xl" : "text-9xl",
                // Spacing
                "mr-16",
            )}>
                {word}
            </p>
            
            <Diamond className="text-indigo-400 stroke-2 fill-indigo-400" />
        </li>
    )
}
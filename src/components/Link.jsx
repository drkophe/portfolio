import clsx from "clsx";

export default function Link({ href, name, classNameAdd, onClick }) {    
    return (
        <a href={href}
        className={clsx(
            // Style
            "text-black dark:text-white",
            // Spacing & Position    
            " block relative px-1 w-fit",
            // After
                // Position
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 ",
                // Content & Background
                " after:content-[''] after:bg-indigo-400 after:opacity-0",
                // Animation
                " after:transition-all after:duration-300 ",
            // Hover
                "hover:after:opacity-100 hover:after:translate-y-1 ",
            // Focus
                // "focus:after:opacity-100 focus:after:translate-y-1 ",

            classNameAdd ? classNameAdd : "",
            onClick ? "cursor-pointer" : ""
        )}
        onClick={onClick ? onClick : null}
        >
            {name}
        </a>
    );
}
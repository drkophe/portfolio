import clsx from 'clsx';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import Icon from './Icon';

export default function Button({ label, leftIcon, rightIcon, type, size, iconSize, rounded, link }) {
    // state
        // setup tab type with the props reference
        const [tabType, setTabType] = useState({
            primary: 'bg-primary-500 text-white fill-white dark:bg-primary-400 dark:text-primary-900 dark:fill-primary-900 hover:bg-primary-700 hover:fill-primary-700 dark:hover:bg-primary-300 dark:hover:fill-primary-300',
            // // Colors
            // "bg-primary-500 text-white fill-white",
            // // Corlors Dark
            // "dark:bg-primary-400 dark:text-primary-900 dark:fill-primary-900",
            // // Hover
            // "hover:bg-primary-700 hover:fill-primary-700",
            // // Hover Dark
            // "dark:hover:bg-primary-300 dark:hover:fill-primary-300",

            secondary: 'bg-primary-100 text-primary-500 fill-primary-500 dark:bg-primary-600 dark:text-primary-200 dark:fill-primary-200 hover:bg-primary-400 hover:text-primary-800 hover:fill-primary-800 dark:hover:bg-primary-400 dark:hover:text-white dark:hover:fill-white',
            // // Colors
            // "bg-primary-100 text-primary-500 fill-primary-500",
            // // Corlors Dark
            // "dark:bg-primary-600 dark:text-primary-200 dark:fill-primary-200",
            // // Hover
            // "hover:bg-primary-400 hover:text-primary-800 hover:fill-primary-800",
            // // Hover Dark
            // "dark:hover:bg-primary-400 dark:hover:text-white dark:hover:fill-white",

            tertiary: 'border-2 bg-transparent hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-gray-200 dark:hover:bg-opacity-10 text-black dark:text-white',
        });

            // setup tab size with the props reference
            const [withIcon, setWithIcon] = useState({
                small: "py-1.5 px-3 space-x-1.5 text-xs",
                medium: "py-2 px-4 space-x-1.5 text-sm",
                large: "py-3 px-6 space-x-2 text-base",
                larger: "py-4 px-8 space-x-3 text-lg",
            })

            const [withoutIcon, setWithoutIcon] = useState({
                small: "p-1.5 text-xs",
                medium: "p-2 text-sm",
                large: "p-3 text-base",
                larger: "p-4 text-lg",
            })

            const [tabSize, setTabSize] = useState(label ? withIcon : withoutIcon);

            // setup border corner with the props reference
            const [tabRounded, setTabRounded] = useState({
                none : "rounded-none",
                small: "rounded",
                medium: "rounded-lg",
                large: "rounded-2xl",
                full : "rounded-full", 
            });


    // comportement


    // render
    return (
        <a href={link}>
            <button
                className={clsx(
                    // Flexbox
                    "flex items-center justify-center",
                    // Spacing and Size
                    tabSize[size],
                    // Border
                    rounded ? tabRounded[rounded] : tabRounded["medium"],
                    // Text
                    "font-medium",
                    // Animation
                    "transition-all duration-300",
                    // Colors / Hover / DarkMode
                    tabType[type],
                    )}
                    >
                {leftIcon && <Icon name={leftIcon} size={iconSize ? iconSize : size}/>}
                <p className='leading-normal'>{label}</p>
                {rightIcon && <Icon name={rightIcon} size={iconSize ? iconSize : size}/>}
            </button>
        </a>
    )
}
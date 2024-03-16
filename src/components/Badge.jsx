import clsx from 'clsx';
import * as Icons from 'lucide-react';
import { useState } from 'react';
import Dot from './Icon';

export default function Badge({ label, type, size, chip }) {
    // state
        // setup tab type with the props reference
        const [tabType, setTabType] = useState({
            primary: 'bg-primary-500 text-white fill-white dark:bg-primary-400 dark:text-primary-950 dark:fill-primary-900',
            // // Colors
            // "bg-primary-500 text-white fill-white",
            // // Corlors Dark
            // "dark:bg-primary-400 dark:text-primary-900 dark:fill-primary-900",

            secondary: 'bg-primary-100 text-primary-500 fill-primary-500 dark:bg-primary-600 dark:text-primary-200 dark:fill-primary-200',
            // // Colors
            // "bg-primary-100 text-primary-500 fill-primary-500",
            // // Corlors Dark
            // "dark:bg-primary-600 dark:text-primary-200 dark:fill-primary-200",

            tertiary: 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300',

            success: 'bg-emerald-500 text-whitedark:text-primary-950',
        });

            // setup tab size with the props reference
            
            const [withoutChip, setWithoutIcon] = useState({
                small: "py-0 px-1.5 text-xs",
                medium: "py-0 px-1.5 text-sm",
                large: "py-0 px-2 text-base",
            })
            const [withChip, setWithChip] = useState({
                small: withoutChip.small + " space-x-1",
                medium: withoutChip.medium + " space-x-1",
                large: withoutChip.large + " space-x-1.5",
            })
            
            const [tabSize, setTabSize] = useState(
                chip ? withChip : withoutChip
            );


    // comportement


    // render
    return (
        <div
            className={clsx(
                // Flexbox
                "flex items-center justify-center",
                // Spacing and Size
                tabSize[size],
                "",
                // Border
                "rounded-full",
                // Text
                "font-medium",
                // Animation
                "transition-all duration-300",
                // Colors / Hover / DarkMode
                tabType[type],
                " px-",
                )}
                >
            {chip && <Icons.Dot style={{ width: 7, height: 7, strokeWidth: 15}} />}
            <p className='leading-normal'>{label}</p>
        </div>
    )
}
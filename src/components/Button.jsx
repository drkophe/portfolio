import clsx from 'clsx';
import { useState } from 'react';
import Icon from './Icon';

export default function Button({ label, leftIcon, rightIcon, type, size, iconSize, rounded, link, picture, tag }) {
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

            // Statut
            done: 'bg-emerald-500 dark:bg-emerald-400 text-white dark:text-emerald-950',
            
            inProgress: 'border-2 bg-transparent hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-gray-200 dark:hover:bg-opacity-10 text-black dark:text-white',
            toDo: 'border-2 bg-transparent hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-gray-200 dark:hover:bg-opacity-10 text-black dark:text-white',
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

            // setup tag size with the props reference
            const [tagWithIcon, setTagWithIcon] = useState({
                small: "h-5 px-1.5 text-xs space-x",
                medium: "h-6 px-1.5 text-sm space-x-1",
                large: "h-7 px-2 text-base space-x-1",
            })

            const [tagWithoutIcon, setTagWithoutIcon] = useState({
                small: "h-5 px-1.5 text-xs",
                medium: "h-6 px-1.5 text-sm",
                large: "h-7 px-2 text-base",
            })


            // const [tabSize, setTabSize] = useState(label ? withIcon : withoutIcon);
            const [tabSize, setTabSize] = useState(leftIcon&&label || rightIcon&&label || leftIcon&&rightIcon ? withIcon : withoutIcon);
            // const [tagSize, setTagSize] = useState(label ? tagWithIcon : tagWithoutIcon);
            const [tagSize, setTagSize] = useState(leftIcon || rightIcon || leftIcon&&rightIcon ? tagWithIcon : tagWithoutIcon);

            // setup border corner with the props reference
            const [tabRounded, setTabRounded] = useState({
                none : "rounded-none",
                small: "rounded",
                medium: "rounded-lg",
                large: "rounded-2xl",
                full : "rounded-full", 
            });

            // setup picture size with the props reference
            const [pictureSize, setPictureSize] = useState({
                small: "w-8 h-8",
                medium: "w-10 h-10",
                large: "w-13 h-13",
                larger: "w-16 h-16",
            })


    // comportement


    // render
    return (
        <a href={link}>
            <button
                className={clsx(
                    // Flexbox
                    "flex items-center justify-center",
                    // Border
                    rounded ? tabRounded[rounded] : tabRounded["medium"],
                    // Animation
                    "transition-all duration-300",
                    
                    picture ? 
                    
                    // Picture
                    size ? pictureSize[size] : pictureSize["medium"]
                    
                    :
                    
                    // Spacing and Size
                    tag ? 
                    size ? tagSize[size] : tagSize["medium"]
                    :
                    size ? tabSize[size] : tabSize["medium"],
                    // Text
                    "font-medium",
                    tag ? "font-bold" : "",
                    // Colors / Hover / DarkMode
                    type ? tabType[type] : tabType["primary"],
                    // Pointer
                    link ? "pointer-events-auto" : "pointer-events-none", 
                )}
            >
                
                {leftIcon && <Icon name={leftIcon} size={iconSize ? iconSize : size}/>}
                {label && <p className='leading-normal'>{label}</p>}
                {picture && <img src={picture} alt="" />}
                {rightIcon && <Icon name={rightIcon} size={iconSize ? iconSize : size}/>}

            </button>            
        </a>
    )
}
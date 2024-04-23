import { useEffect, useState } from "react";
import Button from "../Button";
import avatar from "../../assets/img/avatar.png";
import clsx from "clsx";
import Link from "../Link";
import useIsPhone from "../Hook/useIsPhone";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    // state
    const [links, setLinks] = useState(['Home', 'Projects', 'Skills', 'Work Together']);

    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log("le Dark Mode est actif : ", isDarkMode);   
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Inverse l'état actuel du menu
    };

    const navigation = links.map((link) => 
    <li key={link} className="mx-3 text-white w-fit">
        <Link href={"/#" + link.replace(" ", "")} name={link} onClick={toggleMenu} classNameAdd={clsx( "p-2 md:p-0"
            
        )} />
        {/* <Link href={"#" + link.replace(" ", "")} name={link} onClick={toggleMenu} classNameAdd={clsx( "p-2 md:p-0"
            
        )} /> */}
    </li>
    );
    
    
    const isPhone = useIsPhone();




    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
        document.body.classList.toggle("bg-slate-900");
    }

    // comportement
    // render
    return (

        <div>

        {isPhone ?

        <nav className={clsx(
            // Flexbox
            // "sm:flex flex-row justify-between items-center",
            "flex justify-between",
            // Dimensions & Position & Spacing
            "fixed mx-auto py-4 w-full px-4 z-50 space-x-6",
            // Media Queries

        )}>

            <Button 
                picture={avatar}
                rounded="full"
                size="large"
                link={"/#Home"}
            />

            <div className={clsx(
                    "w-screen absolute",
                    menuOpen ? "top-0 transition-top-0 duration-500 ease-in-out " : "-top-72 transition-top-72 duration-500 ease-in-out", 
                    "right-0"
                )}>
            {/* <Button 
                leftIcon={isDarkMode ?  "Moon" : "Sun"}
                type="primary"
                size="large"
                rounded="full"
                classNameAdd="absolute top-4 left-4"
                onClick={toggleDarkMode}
            /> */}
            <div className="absolute top-4 left-4" onClick={() => darkModeHandler()}>
                {
                    dark && <Button 
                    leftIcon={"Sun"}
                    type="primary"
                    size="large"
                    rounded="full"
                    onClick={toggleDarkMode}
                />
                }
                {
                    !dark && <Button 
                    leftIcon={"Moon"}
                    type="primary"
                    size="large"
                    rounded="full"
                    onClick={toggleDarkMode}
                />
                }
            </div>

                <ul className="flex flex-col items-center dark:bg-slate-800 bg-slate-100 h-full p-3 py-10 md:p-0 justify-center space-y-4 ">{navigation}</ul>
            <Button 
                leftIcon="X"
                type="primary"
                size="large"
                rounded="full"
                classNameAdd="absolute top-4 right-4"
                onClick={toggleMenu}
            />
            </div>

            <Button 
                leftIcon="Menu"
                type="primary"
                size="large"
                rounded="full"
                onClick={toggleMenu}
            />
        </nav>

        :

        <nav className={clsx(
            // Flexbox
            "flex",
            // Dimensions & Position & Spacing
            "fixed mx-auto py-8 max-w-max px-2 top-0 left-0 right-0 z-50 space-x-6",
        )}>

            <Button 
                picture={avatar}
                rounded="full"
                size="large"
                link={"/#Home"}
            />

            <ul className={clsx(
                // Flexbox
                "md:flex flex-row justify-end",
                // Dimensions & Position & Spacing
                "p-3 h-full rounded-full",
                // Background & Border
                "bg-slate-100 dark:bg-slate-800 border-2 border-primary-500",
            )}
            >
                {navigation}
            </ul>

            <div onClick={() => darkModeHandler()}>
                {
                    dark && <Button 
                    leftIcon={"Sun"}
                    type="primary"
                    size="large"
                    rounded="full"
                    onClick={toggleDarkMode}
                />
                }
                {
                    !dark && <Button 
                    leftIcon={"Moon"}
                    type="primary"
                    size="large"
                    rounded="full"
                    onClick={toggleDarkMode}
                />
                }
            </div>
        </nav>}

        </div>
    )
}














// import { useState } from "react";
// import Button from "../Button";
// import avatar from "../../assets/img/avatar.png";
// import clsx from "clsx";
// import Link from "../Link";

// export default function Navbar() {
//     // state
//     const [links, setLinks] = useState(['Acceuil', 'Projects', 'Skills', 'Work Together']);

//     const navigation = links.map((link) => 
//     <li key={link} className="mx-3 text-white">
//         <Link href={"#" + link.replace(" ", "")} name={link} className={clsx(
            
//         )} />
//     </li>
//     );    

//     // comportement
//     // render
//     return (
//         <nav className={clsx(
//             // Flexbox
//             // "sm:flex flex-row justify-between items-center",
//             "flex",
//             // Dimensions & Position & Spacing
//             "fixed mx-auto py-8 max-w-max px-2 top-0 left-0 right-0 z-50 space-x-6",
//             // Media Queries

//         )}>

//             <Button 
//                 picture={avatar}
//                 rounded="full"
//                 size="large"
//             />

//             <ul className=" flex-row bg-slate-800 h-full p-3 rounded-full border-2 border-indigo-400 hidden justify-end md:flex ">{navigation}</ul>

//             <Button 
//                 leftIcon="Moon"
//                 type="primary"
//                 size="large"
//                 rounded="full"
//             />
//         </nav>
//     )
// }






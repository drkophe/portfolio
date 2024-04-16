import { useState } from "react";
import Button from "../Button";
import avatar from "../../assets/img/avatar.png";
import clsx from "clsx";
import Link from "../Link";

export default function Navbar() {
    // state
    const [links, setLinks] = useState(['Acceuil', 'Projects', 'Skills', 'Work Together']);
   
    // const activeClassName = "selected navlink";
    // const activeStyleCallback = ( isActive ) =>
    // isActive ? activeClassName : "navlink";



    // const [mode, setMode] = useState('light');

    const navigation = links.map((link) => 
    <li key={link} className="mx-3 text-white">
        <Link href={"#" + link.replace(" ", "")} name={link} className={clsx(
            
        )} />
    </li>
    );

    const [isOpen, setIsOpen] = useState(false);
    // const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    

    // comportement
    // render
    return (
        <nav className={clsx(
            // Flexbox
            // "sm:flex flex-row justify-between items-center",
            "flex",
            // Dimensions & Position & Spacing
            // "fixed mx-auto py-8 max-w-max px-2 top-0 left-0 right-0 z-50 space-x-6",
            // Media Queries
            "flex-[1] items-center justify-end overflow-hidden",
        )}>

            <Button 
                picture={avatar}
                rounded="full"
                size="large"
            />

            <ul className=" flex-row bg-slate-800 h-full p-3 rounded-full border-2 border-indigo-400 hidden justify-end md:flex ">{navigation}</ul>

            <Button 
                leftIcon="Moon"
                type="primary"
                size="large"
                rounded="full"

                // onClick={() => setLinks(['Acceuil', 'Projects', 'Skills', 'Work Together'])}
            />

        </nav>
    )
}
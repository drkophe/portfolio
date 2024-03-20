import { useState } from "react";
import Button from "../Button";
import avatar from "../../assets/img/avatar.png";
import clsx from "clsx";

export default function Navbar() {
    // state
    const [links, setLinks] = useState(['Acceuil', 'Projects', 'Skills', 'Work Together']);

    // const [mode, setMode] = useState('light');

    const navigation = links.map((link) => 
    <li key={link} className="mx-3 text-white">
        <a href="#" 
        className={clsx(
            // Spacing & Position    
            " block relative px-1",
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
                "focus:after:opacity-100 focus:after:translate-y-1 ",
        )}>
            {link}
        </a>
    </li>
    );

    // comportement
    // render
    return (
        <nav className="mx-auto py-8 max-w-max flex flex-row items-center px-2 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 space-x-6">

            <Button 
                picture={avatar}
                rounded="full"
                size="large"
            />

            <ul className="flex flex-row bg-slate-800 h-full p-3 rounded-full border-2 border-indigo-400">{navigation}</ul>

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
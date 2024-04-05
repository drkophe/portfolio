import { useState } from "react";
import Button from "../Button";
import avatar from "../../assets/img/avatar.png";
import clsx from "clsx";
import Link from "../Link";

export default function Navbar() {
    // state
    const [links, setLinks] = useState(['Acceuil', 'Projects', 'Skills', 'Work Together']);
    // /!\ key must be review because name ? /!\
    // const [links, setLinks] = useState([
    //     <Link key={name} href="/" name="Acceuil"/>,
    //     <Link key={name} href="/projects" name="Projects"/>,
    //     <Link key={name} href="/skills" name="Skills"/>,
    //     <Link key={name} href="/work-together" name="Work Together"/>,
    // ]);

    // const [mode, setMode] = useState('light');

    const navigation = links.map((link) => 
    <li key={link} className="mx-3 text-white">
        <Link href={"#" + link.replace(" ", "")} name={link}/>
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
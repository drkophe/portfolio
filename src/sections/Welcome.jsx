import clsx from "clsx";
import Banner from "../components/SectionWelcome/Banner";
import image from '../assets/img/profil_mariage_shade_x2.png';
import Button from "../components/Button";
import Link from "../components/Link";
import { useEffect, useState } from "react";
import useIsPhone from "../components/Hook/useIsPhone";

export default function Welcome() {
    // state
    // const [isPhone, setIsPhone] = useState(true);

        // state
        const isPhone = useIsPhone();
        const [discoverOpen, setDiscoverOpen] = useState(false);
        const toggleDiscover = () => setDiscoverOpen(!discoverOpen);

        const [buttonDiv, setButtonDiv] = useState(
            <div className="flex items-center justify-around md:w-[370px] space-x-3 pl-2">

                <Button
                    label={isPhone ? "" :"Github"}
                    link="https://github.com/drkophe"
                    leftIcon="Github"
                    type="secondary"
                    size={isPhone ? "large" :"small"}
                    rounded="full"
                />

                <Button
                    label={isPhone ? "" :"Linkedin"}
                    link="https://www.linkedin.com/in/lorenzo-bosi-1724a2259/"
                    leftIcon="Linkedin"
                    type="secondary"
                    size={isPhone ? "large" :"small"}
                    rounded="full"
                />

                <Button
                    label={isPhone ? "" :"Twitter"}
                    link="https://twitter.com/Lorenzo_Bosi"
                    leftIcon="Twitter"
                    type="secondary"
                    size={isPhone ? "large" :"small"}
                    rounded="full"
                />
                
            </div>
        );

    // comportement
    // render
    return (
        <section id="Home" className={clsx(
            // Flexbox
            "flex flex-col items-center justify-center",
            // Dimensions & Position & Spacing
            "lg:max-h-screen md:max-h-none md:h-fit md:mb-20 relative md:py-20 py-10 pt-20 w-[100vw]",
        )}>

            <Banner />

            <div className="relative lg:right-[2%] md:pt-10 h-3/6 flex md:flex-row flex-col-reverse items-center justify-end md:pr-10 w-11/12 space-x-10">

                <div className="h-2/6 md:max-w-xl lg:pl-10 text-right dark:text-white text-black space-y-4 flex flex-col p-2 items-end self-end lg:pr-10">

                    <h2 className="lg:text-5xl md:text-4xl text-3xl w-fit font-bold">Front end developer</h2>
                    <h2 className="lg:text-5xl md:text-3xl text-3xl w-fit">Lorenzo Bosi</h2>
                    {isPhone ? buttonDiv : null}
                    <Link name="Discover me" onClick={toggleDiscover} /> 
                    <div className={clsx(
                        "opacity-0 lg:max-h-[1000px] lg:h-auto max-h-[100px] h-1 overflow-hidden md:text-sm lg:text-base",
                        discoverOpen ? "opacity-100 max-h-[1000px] h-fit" : null,
                        "transition-all duration-700 ease-in-out"
                    )}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt saepe odio error, commodi ipsum, delectus quia autem reprehenderit quis pariatur fuga officia a id repellendus ipsam dignissimos possimus. Explicabo, veritatis!
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-end h-3/6 relative md:right-4 w-fit self-end">
                    <img src={image} alt="Mariage" className="md:mb-5 z-30 lg:h-4/6 md:max-h-[700px] lg:[mask-image:_linear-gradient(to_bottom,_black_calc(100%-200px),transparent_100%)]"/>
                    {isPhone ? null : buttonDiv}
                </div>
            </div>

        </section>
    )
}
import Button from "../Button";
import { Icon } from '@iconify/react';
import useIsPhone from "../Hook/useIsPhone";

export default function SecondaryProject({title, iconProject, technos, link}) {
    //state
    const isPhone = useIsPhone();
    //competement
    //render
    return(
        <div className="relative">
            <a href={link}>

                <div className="flex flex-row items-center md:space-x-4 space-x-3 hover:bg-slate-400 hover:bg-opacity-20 transition-all duration-300 ease-in-out p-4 rounded-xl">
                    <Button  
                    type={"primary"}
                    leftIcon={iconProject}
                    size={isPhone ? "small" : "large"}
                    />
                    <p className="text-white font-bold text-xl">{title}</p>
                    <div className="md:flex flex-row md:space-x-3 space-x-1 hidden">
                        {technos.map((techno, index) => (
                            <Button
                            key={index}
                            type={"tertiary"}
                            leftIcon={techno}
                            size={isPhone ? "small" : "medium"}
                            rounded={"full"}
                            />
                        ))}
                    </div>
                    <Button
                    type={"ghost"}
                    leftIcon={"ArrowUpRight"}
                    size={isPhone ? "small" : "medium"}
                    classNameAdd={"absolute right-4 bottom-2/4 transform translate-y-2/4"}
                    />
                </div>
            {/* <Button /> */}

            </a>
        </div>
    )
}
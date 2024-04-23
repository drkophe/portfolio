import clsx from "clsx";
import Button from "../Button";
import { useState } from "react";
import useIsPhone from "../Hook/useIsPhone";

export default function Projects({ statut, title, technos, img, altImg }) {
    // state
    const [hovered, setHovered] = useState(false);
    const isPhone = useIsPhone();
    
    // comportement
    // render
    return (
        <div 
            className={clsx(
            // Flexbox
            "flex flex-col justify-between",
            // Sizing & Position
            "w-full h-full relative overflow-hidden",
            // Border
            "border-2 border-indigo-400 rounded-3xl",
            )}

            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            <img src={img} alt={altImg} className={clsx(
                // Sizing & Position
                "absolute w-full h-full object-cover object-center -z-0",
                // Animation
                "transform ease-out duration-500",
                // Opacity
                "opacity-5",
            )}
            style={{ opacity: hovered ? '100%' : '10%', transitionProperty: 'opacity' }} 
            />

            <div className={clsx(
                // Flexbox
                "flex flex-row items-center justify-center",
                // Spacing & Position
                "p-4 space-x-4 z-10",
                // Animation
                "transform ease-out duration-500",
            )}
            style={{ opacity: hovered ? '0%' : '100%', transitionProperty: 'opacity' }}
            >

                <h3 className="dark:text-white text-slate-600 font-black text-2xl">{title}</h3>
                <Button
                    label="Done"
                    size="small"
                    rounded="full"
                    leftIcon="Dot"
                    type={statut}
                    tag={true}
                />
            </div>

            <div className="flex items-center space-x-3 p-4 hover:hidden">
            {technos.map((techno, index) => 
                <Button 
                key={index} 
                label={techno}
                size="small"
                rounded="full"
                type="primary"
                tag={true} 
                />)
                }
            </div>

                {/* TODO : Optimiser le space-x-4 car non responsive frendly pour l'instant j'ai mis nowrap mais ca serait mieux en wrap*/}
            <div className={clsx(
                // Flexbox
                "flex items-center justify-center flex-nowrap space-x-4",
                // Spacing & Position
                "absolute bottom-0 w-full h-32 p-4",
                // Animation
                "transform ease-out duration-700",
                // Style
                "bg-gray-950 bg-opacity-90",
                )}
                style={{ bottom: hovered ? '0' : '-100%', transitionProperty: 'bottom' }}
            >

                <Button 
                label="En savoir plus"
                size={isPhone ? "medium" : "small"}
                rounded="full"
                type="primary"
                rightIcon="ArrowRight"
                link="#"
                />

                <Button 
                label="Visiter le site"
                size={isPhone ? "medium" : "small"}
                rounded="full"
                type="primary"
                rightIcon="ArrowRight"
                link="#"
                />

            </div>
        </div>
    )
}
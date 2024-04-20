import { useState } from "react";
import BannerWord from "./BannerWord";
import clsx from "clsx";
import useIsPhone from "../Hook/useIsPhone";


export default function Banner() {
    // state
    const isPhone = useIsPhone();
    // 8 words - not too long
    const [words, setWords] = useState(['Front', 'End', 'Dev', 'Junior', 'Name', 'Is', 'Lorenzo', 'Bosi']);

    const loop = words.map((word) => 
        <BannerWord key={word} word={word} />
    );

    const containerLoopCSS = "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll";

    // comportement
    // render
    return (
        <div className= {clsx(
            // Flexbox
            "inline-flex flex-nowrap",
            // Dimensions & Blocks
            "w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]",
            // Position
            "-z-0 absolute top-[25vh]",
            // isPhone ? "top-[15vh]" : "top-[25vh]",
        )}>

                <ul className={containerLoopCSS}>
                    {loop}      
                </ul>                

                <ul className={containerLoopCSS} aria-hidden="true">
                    {loop}
                </ul>                
        </div>
    );
}
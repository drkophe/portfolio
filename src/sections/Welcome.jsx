import clsx from "clsx";
import Banner from "../components/SectionWelcome/Banner";
import image from '../assets/img/profil_mariage_shade_x2.png';
import Button from "../components/Button";
import Link from "../components/Link";

export default function Welcome() {
    // state
    // comportement
    // render
    return (
        <section id="Welcome" className={clsx(
            // Flexbox
            "flex flex-col items-center justify-center",
            // Dimensions & Position & Spacing
            "h-screen relative py-20",
        )}>

            <Banner />

            <div className="flex items-center justify-center w-4/5 space-x-10">
                <div className="w-3/5 text-right text-white space-y-4 mt-32 flex flex-col items-end">
                    <h2 className="text-5xl w-fit">Front end developer</h2>
                    <h2 className="text-5xl w-fit">Celtics fan</h2>
                    <Link name="Discover me" href="#" />
                </div>

                <div className="w-2/5 flex flex-col items-center justify-center h-full">
                    <img src={image} alt="Mariage" className=" h-4/5 [mask-image:_linear-gradient(to_bottom,_black_calc(100%-200px),transparent_100%)]"/>
                    <div className="flex items-center justify-center justify-around w-[370px] pl-2">

                        <Button
                            label="Github"
                            link="https://github.com/drkophe"
                            leftIcon="Github"
                            type="secondary"
                            size="small"
                            rounded="full"
                        />

                        <Button
                            label="Linkedin"
                            link="https://www.linkedin.com/in/lorenzo-bosi-1724a2259/"
                            leftIcon="Linkedin"
                            type="secondary"
                            size="small"
                            rounded="full"
                        />

                        <Button
                            label="Twitter"
                            link="https://twitter.com/Lorenzo_Bosi"
                            leftIcon="Twitter"
                            type="secondary"
                            size="small"
                            rounded="full"
                        />
                        
                    </div>
                </div>
            </div>

        </section>
    )
}
import clsx from "clsx";
import Logo from "./components/Logo";
import Navbar from "./components/Navigation/Navbar";
import SecondaryProject from "./components/SectionProjects/SecondaryProject";

export default function AllProjects() {
    //states
    //comportement
    //render
    return(
        <main className="dark pb-14">
            <Navbar />
            <section className={clsx(
            // Flexbox
            "flex flex-col items-center justify-center",
            // Dimensions & Position & Spacing
            "lg:max-h-screen md:max-h-none md:h-fit md:mb-20 relative",
            )}>

            <div className="flex flex-col items-start lg:flex-row w-full mt-20 md:mt-40">
                <div className="w-full lg:w-3/6 lg:border-r-2 flex flex-col items-center ">
                    <h2 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold text-white">Main Projects</h2>
                    <div className="p-10 *:w-full xl:w-3/4 w-full space-y-3">
                        <SecondaryProject 
                        title="Adonijah ADAMS"
                        iconProject={"HeartHandshake"}
                        technos={["SiWix" , "SiJavascript"]}
                        link={"https://drkophe.github.io/Sudoku/"} 
                        />
                        <SecondaryProject 
                        title="Portfolio LB"
                        iconProject={"BriefcaseBusiness"}
                        technos={["SiReact" , "SiTailwindcss", "SiNodedotjs"]}
                        link={"https://lorenzobosi.fr/"}  
                        />
                        <SecondaryProject 
                        title="Creonal"
                        iconProject={"Rss"}
                        technos={["SiWix" , "SiFigma", "SiJavascript"]}
                        link={"https://www.creonal.com/"}  
                        />
                        <SecondaryProject 
                        title="VadimPhoto"
                        iconProject={"Camera"}
                        technos={["SiReact" , "SiCss3", "SiJavascript"]}
                        link={"#"}  
                        />
                    </div>
                </div>

                <div className="w-full lg:w-3/6 flex flex-col items-center md:mt-0 mt-10">
                    <h2 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold text-white">Side Projects</h2>
                    <div className="p-10 *:w-full xl:w-3/4 w-full space-y-3">
                        <SecondaryProject 
                        title="Sudoku"
                        iconProject={"Grid"}
                        technos={["SiHtml5" , "SiCss3", "SiJavascript"]}
                        link={"https://drkophe.github.io/Sudoku/"}  
                        />
                        <SecondaryProject 
                        title="Mastermind"
                        iconProject={"Grip"}
                        technos={["SiHtml5" , "SiCss3", "SiJavascript"]}
                        link={"https://drkophe.github.io/MasterMind/"}  
                        />
                        <SecondaryProject 
                        title="Minesweeper"
                        iconProject={"Bomb"}
                        technos={["SiHtml5" , "SiCss3", "SiJavascript"]}
                        link={"#"}  
                        />
                    </div>
                </div>
            </div>
            </section>
        </main>
    )
}
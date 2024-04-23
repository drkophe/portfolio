import Navbar from "./components/Navigation/Navbar";
import SecondaryProject from "./components/SectionProjects/SecondaryProject";

export default function AllProjects() {
    //states
    //comportement
    //render
    return(
        <main className="dark">
            <Navbar />
            <div className="flex w-full mt-40">
                <div className="w-3/6 border-r-2">
                    <h2 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold text-white">Main Projects</h2>
                    <div>
                        <SecondaryProject 
                        title="Sudoku"
                        iconProject={"Grid"}
                        technos={["HTML", "CSS", "JavaScript"]} 
                        />
                    </div>
                </div>

                <div className="w-3/6">
                    <h2 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold text-white">Side Projects</h2>
                </div>
            </div>
        </main>
    )
}
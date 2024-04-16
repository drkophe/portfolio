import Link from "../components/Link";
import Project from "../components/SectionProjects/Project";

export default function Projects() {
    // state
    // comportement
    // render
    return (
        <section id="Projects" className="flex flex-col justify-center items-center p-6">

            <h2 className="text-4xl font-bold text-center mb-6 text-white">Projects</h2>
            <Link name="See all projects" href="/projects" />
            
            <div className="flex md:flex-row flex-col items-center justify-center p-6 w-full my-6">
                <div className="flex flex-col md:w-4/12 w-full m-4 space-y-7 md:h-[80vh] h-[100vh]">  
                    <div className="h-3/5">
                        <Project
                        title="Sudoku"
                        statut="done"
                        technos={["HTML", "CSS", "JavaScript"]}
                        img={"../src/assets/img/project_sudoku.png"}
                        />
                    </div>
                    <div className="h-2/5">
                        <Project
                        title="Sudoku Blala"
                        statut="done"
                        technos={["HTML", "CSS", "JavaScript"]}
                        img={"../src/assets/img/project_sudoku.png"}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:w-3/12 w-full m-4 md:h-[80vh] h-[50vh]">  
                    <Project
                    title="Sudoku"
                    statut="done"
                    technos={["HTML", "CSS", "JavaScript"]}
                    img={"../src/assets/img/project_sudoku.png"}
                    />
                </div>

                <div className="flex flex-col md:w-5/12 w-full m-4 md:h-[80vh] h-[50vh]">  
                    <Project
                    title="Sudoku"
                    statut="done"
                    technos={["HTML", "CSS", "JavaScript"]}
                    img={"../src/assets/img/project_sudoku.png"}
                    />
                </div>
            </div>

        </section>
    )
}
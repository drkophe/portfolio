import Skill from "../components/SectionSkills/Skill";

export default function Skills() {
    // state
    // comportement
    // render
    return (
        <section id="Skills" className="flex flex-col justify-center items-center md:p-6 pt-10 md:mt-0 my-20 w-[100vw]">
            <h2 className="text-4xl font-bold text-center dark:text-white text-black md:mt-24 md:mb-0 mb-20">Skills</h2>

            <div className="flex items-center justify-center w-full md:h-[50vh]">
                <div className="flex md:flex-row flex-wrap md:items-start items-center justify-center w-full md:space-x-20 max-md:space-y-10 *:w-3/6 md:*:w-fit ">
                    <Skill 
                        title="Design"
                        skills={['Figma', 'TailwindCSS']}
                    />

                    <Skill
                        title="Front"
                        skills={['CSS', 'VueJS', 'React']}
                    />

                    <Skill
                        title="Back"
                        skills={['NodeJS', 'PhpMyAdmin', 'Symfony']}
                    />

                    <Skill
                        title="Other"
                        skills={['Git', 'Notion', 'Docker']}
                    />

                    <Skill
                        title="Hobbie"
                        skills={['Osu !', 'Super Smash Bros.', 'Procreate']}
                    /> 
                </div>
            </div>
        </section>
    )
}
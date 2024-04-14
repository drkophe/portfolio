import Skill from "../components/SectionSkills/Skill";

export default function Skills() {
    // state
    // comportement
    // render
    return (
        <section id="Skills" className="flex flex-col justify-center items-center p-6">
            <h2 className="text-4xl font-bold text-center text-white mt-24">Skills</h2>

            <div className="flex items-center justify-center w-full h-[50vh]">
                <div className="flex items-start justify-center w-full space-x-20">
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
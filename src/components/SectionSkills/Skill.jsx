import Button from "../Button";

export default function Skill({title, skills}) {
    // state
    // comportement
    // render
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-white font-black text-2xl mb-6">{title}</h3>
            <div className="space-y-3 flex flex-col items-center">
                {skills.map((skill, index) => (
                    <Button 
                    key={index} 
                    label={skill} 
                    type="primary"
                    size="large"
                    rounded="full"
                    tag={true}
                    />
                ))}
            </div>
        </div>
    )
}
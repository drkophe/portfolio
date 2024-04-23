import Button from "../Button";

export default function SecondaryProject({title, iconProject, technos}) {
    //state
    //competement
    //render
    return(
        <div>
            <div>
                <Button  
                type={"primary"}
                leftIcon={iconProject}
                />
                <p>{title}</p>
                <div>
                    <Button 
                    type={"secondary"}
                    leftIcon={iconProject}
                    />
                    {technos.map((techno, index) => (
                        <Button
                        key={index}
                        type={"secondary"}
                        leftIcon={techno}
                        />
                    ))}
                </div>
            </div>
            <Button />

        </div>
    )
}
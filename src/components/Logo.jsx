import * as Icons from 'react-icons/si';
// import { SiHtml5 } from 'react-icons/si';
import { useState } from 'react';

export default function Logo({name, size}) {
    // state
        // setup left icon and right icon in state with props
        const [iconName, setIconName] = useState(name);
        const IconComponent = Icons[iconName];

        // console.log(IconComponent == undefined)


    // Retourne null si aucune icône n'est trouvée
    if (!IconComponent) return null;



        const [tabSize, setTabSize] = useState({
            small: 18,
            medium: 22,
            large: 26,
            larger: 30,
        })

    // comportement
    // render
    return (
        <div>
            {
                name == "Dot" ?
                IconComponent && <IconComponent style={{width: tabSize[size], height: tabSize[size], strokeWidth: 6,}} />
                :
                IconComponent && <IconComponent style={{width: tabSize[size], height: tabSize[size], fontSize: tabSize[size]}} />
            }
        </div>
    )
}
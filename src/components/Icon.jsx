import * as Icons from 'lucide-react';
import { useState } from 'react';

export default function Icon({name, size}) {
    // state
        // setup left icon and right icon in state with props
        const [iconName, setIconName] = useState(name);
        const IconComponent = Icons[iconName];

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
                IconComponent && <IconComponent style={{width: tabSize[size], height: tabSize[size], strokeWidth: 6}} />
                :
                IconComponent && <IconComponent style={{width: tabSize[size], height: tabSize[size]}} />
            }
        </div>
    )
}
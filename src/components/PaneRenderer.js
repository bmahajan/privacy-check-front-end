import React, {useState, useEffect, useRef} from 'react';
import MainPanel from './MainPanel'

export default function PaneRenderer() {


const HandleNewPane = (newPanel) => {
    setPanel(newPanel)
    console.log(`Made it to panel renderer`)
}

const ReturnToPrevPanel = () => {
    setPanel(panelRef.current)
}

const [panel, setPanel] = useState(<MainPanel onBack={ReturnToPrevPanel} onMPBClick={HandleNewPane}/>)

const panelRef = useRef();
useEffect(() => {
    panelRef.current = panel;
    console.log(`"Previous page" reference set`)
},[]);


    return(
        <div> 
            {panel}
        </div>

    );
}

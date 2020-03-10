import React, {useState, useEffect, useRef} from 'react';
import MainPanel from './MainPanel'

export default function PanelManager() {


  const HandleNewPane = (newPanel) => {
    setPanel(newPanel);
    console.log('Switch to panel' + newPanel);
  };

  const ReturnToPrevPanel = () => {
    setPanel(panelRef.current);
  };

  const [panel, setPanel] = useState(<MainPanel onBack={ReturnToPrevPanel} onMPBClick={HandleNewPane}/>)

  const panelRef = useRef();

  useEffect(() => {
    panelRef.current = panel;
    console.log(`"Previous page" reference set`)
  },[]);

  return(
    <div>{panel}</div>
  );
}

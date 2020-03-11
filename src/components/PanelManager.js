import React from 'react';
import MainPanel from './MainPanel'

export default function PanelManager() {

  const HandleNewPane = (newPanel) => {
    setPanel(newPanel);
    console.log('Switched to panel ' + newPanel.className);
  };

  const ReturnToPrevPanel = () => {
    setPanel(panelRef.current);
  };

  const [panel, setPanel] = React.useState(<MainPanel onBack={ReturnToPrevPanel} onMPBClick={HandleNewPane}/>);

  const panelRef = React.useRef();

  React.useEffect(() => {
    panelRef.current = panel;
    console.log(`"Previous page" reference set`)
  },[]);

  return(
    <div>{panel}</div>
  );
}

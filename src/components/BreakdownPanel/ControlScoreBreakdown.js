import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";

export default function ControlScoreBreakdown(props) {

  return (
    <div>
      Control Panel
      <CompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}
import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";

export default function ControlScoreBreakdown(props) {

  return (
    <div>
      <CompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}
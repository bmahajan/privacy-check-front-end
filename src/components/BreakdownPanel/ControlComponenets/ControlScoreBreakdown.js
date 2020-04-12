import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";

export default function ControlScoreBreakdown(props) {

  return (
    <div>
      <CompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}
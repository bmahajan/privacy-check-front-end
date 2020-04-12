import React from "react";
import ControlFeatureList from "./ControlFeatureList";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";

export default function ControlBreakdownPanel(props) {

  return (
    <div>
      <CompetitorAnalysisPanel />
      <ControlFeatureList />
    </div>
  );
}
import React from "react";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";
import GDPRFeatureList from "./GDPRFeatureList";

export default function GDPRBreakdownPanel(props) {

  return (
    <div>
      <CompetitorAnalysisPanel />
      <GDPRFeatureList />
    </div>
  );
}
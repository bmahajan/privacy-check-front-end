import React from "react";
import CompetitorAnalysisPanel from "../CompetitorAnalysisComponenets/CompetitorAnalysisPanel";
import GDPRFeatureList from "./GDPRFeatureList";

export default function GDPRScoreBreakdown(props) {

  return (
    <div>
      <CompetitorAnalysisPanel />
      <GDPRFeatureList />
    </div>
  );
}
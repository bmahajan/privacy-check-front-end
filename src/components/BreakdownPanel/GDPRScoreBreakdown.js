import React from "react";
import CompetitorAnalysisPanel from "./CompetitorAnalysisPanel";
import GDPRFeatureList from "./GDPRFeatureList";

export default function GDPRScoreBreakdown(props) {

  return (
    <div>
      GDPR Panel
      <CompetitorAnalysisPanel />
      <GDPRFeatureList />
    </div>
  );
}
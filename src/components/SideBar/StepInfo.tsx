import React from "react";
import { IStepInfoProps } from "./const";

export const StepInfo: React.FC<IStepInfoProps> = ({
  stepIndex,
  stepName,
  active,
}) => {
  return (
    <div className="step-info">
      <div className={`step-icon ${active && "active"}`}>{stepIndex}</div>
      <div>
        <p className="step-index">STEP {stepIndex}</p>
        <p className="step-text">{stepName}</p>
      </div>
    </div>
  );
};

import { Steps } from "./const";
import "./SideBar.css";
import { StepInfo } from "./StepInfo";

const SideBar = () => {
  return (
    <div className="side-bar">
      {Steps.map((step) => (
        <StepInfo
          key={step.key}
          stepIndex={step.stepIndex}
          stepName={step.stepName}
          active
        />
      ))}
    </div>
  );
};

export default SideBar;

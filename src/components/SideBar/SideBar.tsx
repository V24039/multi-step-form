import { Steps } from "./const";
import "./SideBar.css";
import { StepInfo } from "./StepInfo";

const SideBar = ({ currentPage }: { currentPage: number }) => {
  return (
    <div className="side-bar">
      {Steps.map((step, index) => (
        <StepInfo
          key={step.key}
          stepIndex={step.stepIndex}
          stepName={step.stepName}
          active={currentPage === index}
        />
      ))}
    </div>
  );
};

export default SideBar;

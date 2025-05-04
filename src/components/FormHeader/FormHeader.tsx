import { FormDetails } from "../const";

import "./formHeader.css"

export const FormHeader = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div className="formHeader">
      <h1 style={{paddingBottom: "10px"}}>{FormDetails[stepNumber].heading}</h1>
      <span>{FormDetails[stepNumber].description}</span>
    </div>
  );
};

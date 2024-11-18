import { FormDetails } from "../const";

import "./formHeader.css"

export const FormHeader = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div className="formHeader">
      <h1>{FormDetails[stepNumber].heading}</h1>
      <span>{FormDetails[stepNumber].description}</span>
    </div>
  );
};

import { FormDetails } from "./const";

export const FormHeader = ({ stepNumber }: { stepNumber: number }) => {
  return (
    <div>
      <h1>{FormDetails[stepNumber].heading}</h1>
      <span>{FormDetails[stepNumber].description}</span>
    </div>
  );
};

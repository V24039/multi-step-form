import { Formik } from "formik";
import { formInitialValues, IFormValues } from "./const";
import { useRef } from "react";

const InfoForm = () => {
  const step = useRef<number>(2);

  const handleSubmit = (values: IFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={handleSubmit}
      ></Formik>
      <div className="buttons">
        <button onClick={() => step.current--}>Go Back</button>
        <button onClick={() => step.current++}>Next Step</button>
      </div>
    </div>
  );
};

export default InfoForm;

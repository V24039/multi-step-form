import { useState } from "react";
import { Form, Formik } from "formik";
import { FormDetails, formInitialValues, IFormValues } from "./const";
import { FormHeader } from "./FormHeader/FormHeader";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { AddOns } from "./AddOns/AddOns";
import { SelectPlan } from "./SelectPlan/SelectPlan";

const InfoForm = () => {
  const [step, setStep] = useState<number>(0);

  const handleSubmit = (values: IFormValues) => {
    if (step <= 2) {
      setStep((prev) => prev + 1);
    } else {
      console.log("ans");
      console.log(values);
    }
  };

  return (
    <div>
      <FormHeader stepNumber={step} />
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={FormDetails[step].validationSchema}
      >
        {() => (
          <Form>
            {step === 0 && <PersonalInfo />}
            {step === 1 && <SelectPlan />}
            {step === 2 && <AddOns />}
            <div className="buttons">
              <button
                className="btn-back"
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                style={{
                  visibility: `${step === 0 ? "hidden" : "visible"}`,
                }}
              >
                Go Back
              </button>
              <button className="btn-submit" type="submit">Next Step</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InfoForm;

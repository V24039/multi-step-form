import { useState } from "react";
import { Form, Formik } from "formik";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormDetails, formInitialValues, IFormValues } from "./const";
import { FormHeader } from "./FormHeader/FormHeader";
import { PersonalInfo } from "./PersonalInfo/PersonalInfo";
import { AddOns } from "./AddOns/AddOns";
import { SelectPlan } from "./SelectPlan/SelectPlan";
import Final from "./Final/Final";
import { ThankYou } from "./ThankyouNote/ThankyouNote";

const InfoForm = ({
  setCurrentPage,
}: {
  setCurrentPage: (value: number) => void;
}) => {
  const [step, setStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values: IFormValues) => {
    setCurrentPage(step + 1);
    if (step <= 2) {
      setStep((prev) => prev + 1);
    } else {
      console.log("ans");
      console.log(values);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="info-form">
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <>
          <FormHeader stepNumber={step} />
          <Formik
            initialValues={formInitialValues}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={FormDetails[step].validationSchema}
          >
            {() => (
              <Form className="form-container">
                {step === 0 && <PersonalInfo />}
                {step === 1 && <SelectPlan />}
                {step === 2 && <AddOns />}
                {step === 3 && <Final setStep={setStep} />}
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
                  <button
                    className={`${step === 3 ? "btn-submit" : "btn-next"}`}
                    type="submit"
                  >
                    {step === 3 ? "Confirm" : "Next Step"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default InfoForm;

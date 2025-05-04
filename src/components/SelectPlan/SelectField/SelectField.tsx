import { Field, useFormikContext } from "formik";
import { IFormValues } from "../../const";
import { Plans } from "../const";
import "./selectField.css";
import { useEffect } from "react";

const SelectField = () => {
  const { values, setFieldValue } = useFormikContext<IFormValues>();
  const isMonthly = values?.planPeriod === "Monthly";
  const plans = Plans;

  useEffect(() => {
    const selectedPlan = plans.find((plan) => plan.name === values?.plan);

    const value = isMonthly
      ? selectedPlan?.costPerMonth
      : selectedPlan?.costPerYear;
    setFieldValue("planPrice", value);
  }, [isMonthly, values?.plan]);

  return (
    <div className="selectField">
      {plans.map((plan) => (
        <label className="field" htmlFor={plan.name} key={plan.name}>
          {plan.icon}
          <div className="planDescp">
            <p>{plan.name}</p>
            {isMonthly ? (
              <p>${plan.costPerMonth}/mo</p>
            ) : (
              <>
                <p>${plan.costPerYear}/yr</p>
                <p className="year-offer">${plan.yearOffers}</p>
              </>
            )}
          </div>
          <Field type="radio" id={plan.name} name="plan" value={plan.name} />
        </label>
      ))}
    </div>
  );
};

export default SelectField;

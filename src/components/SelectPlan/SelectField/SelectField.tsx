import { Field, useFormikContext } from "formik";
import { IFormValues } from "../../const";
import { Plans } from "../const";
import "./selectField.css";

const SelectField = () => {
  const { values } = useFormikContext<IFormValues>();
  const plans = Plans;

  return (
    <div className="selectField">
      {plans.map((plan) => (
        <label className="field" htmlFor={plan.name} key={plan.name}>
          {plan.icon}
          <div className="planDescp">
            <p>{plan.name}</p>
            {values?.planPeriod === "Monthly" ? (
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

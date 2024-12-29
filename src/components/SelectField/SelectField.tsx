import { Plans } from "../SelectPlan/const";
import "./selectField.css";

const SelectField = () => {
  const plans = Plans;
  return (
    <div className="selectField">
      {plans.map((plan) => (
        <>
          <label className="field" htmlFor={plan.name}>
            {plan.icon}
            <div className="planDescp">
              <p>{plan.name}</p>
              <p>${plan.costPerMonth}/mo</p>
            </div>
            <input id={plan.name} type="radio" value={plan.name} name="plan" />
          </label>
        </>
      ))}
    </div>
  );
};

export default SelectField;

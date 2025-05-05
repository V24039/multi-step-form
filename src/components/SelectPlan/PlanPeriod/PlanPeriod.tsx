import { useFormikContext } from "formik";
import "./planPeriod.css";
import { IFormValues } from "../../const";

const PlanPeriod = () => {
  const { values, setFieldValue } = useFormikContext<IFormValues>();

  const handleChange = (value: boolean) => {
    setFieldValue("planPeriod", value ? "Yearly" : "Monthly");
  };

  return (
    <div className="container">
      <input
        id="planPeriod"
        type="checkbox"
        defaultChecked={values.planPeriod === "Yearly"}
        onChange={(e) => handleChange(e.target.checked)}
        className="toggleCheck"
      />
      <label
        htmlFor="planPeriod"
        data-left-label="Monthly"
        data-right-label="Yearly"
        className="toggle"
      >
        <span className="toggleHandle"></span>
      </label>
    </div>
  );
};

export default PlanPeriod;

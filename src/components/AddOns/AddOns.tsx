import { ADDONSLIST } from "./const";
import "./add-on.css";
import { useField, useFormikContext } from "formik";
import { IFormValues } from "../const";

export const AddOns = () => {
  const { values, setFieldValue } = useFormikContext<IFormValues>();
  const isMonthly = values?.planPeriod === "Monthly";
  const [, meta] = useField("addOns");

  const handleChange = (index: number, isChecked: boolean) => {
    const { name, pricePerMonth, pricePerYear } = ADDONSLIST[index];
    const { addOns } = values;
    if (isChecked) {
      setFieldValue("addOns", [
        ...addOns,
        { name, price: isMonthly ? pricePerMonth : pricePerYear },
      ]);
    } else {
      setFieldValue(
        "addOns",
        addOns.filter((addOn) => addOn.name !== name)
      );
    }
  };

  const isInputChecked = (addOn: (typeof ADDONSLIST)[0]) =>
    values.addOns.includes({
      name: addOn.name,
      price: isMonthly ? addOn.pricePerMonth : addOn.pricePerYear,
    });

  return (
    <div className="add-on">
      {ADDONSLIST.map((addOn, index) => (
        <div
          key={`add-on-${index}`}
          className={`checkbox-input ${
            isInputChecked(addOn) ? "selected-checkbox" : ""
          }`}
          onClick={() => handleChange(index, !isInputChecked(addOn))}
        >
          <input
            className={`text-input ${
              meta.touched && meta.error && "error-border"
            }`}
            type="checkbox"
            name="addOns"
            value={addOn.name}
            defaultChecked={isInputChecked(addOn)}
            onChange={(e) => handleChange(index, e.target.checked)}
          />
          <div className="checkbox-input-descp">
            <div>
              <label style={{ fontWeight: "bold" }}>{addOn.name}</label>
              <p>{addOn.description}</p>
            </div>
            {isMonthly ? (
              <p className="rate">${addOn.pricePerMonth}/mo</p>
            ) : (
              <p className="rate">${addOn.pricePerYear}/yr</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

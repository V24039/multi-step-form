import { useFormikContext } from "formik";
import { IFormValues } from "../const";
import "./final.css";

const Final = ({ setStep }: { setStep: (value:number) => void }) => {
  const { values } = useFormikContext<IFormValues>();

  const { periodText, periodSubtext } =
    values?.planPeriod === "Monthly"
      ? { periodText: "month", periodSubtext: "mo" }
      : { periodText: "year", periodSubtext: "yr" };

  const totlCost =
    values?.planPrice +
    values?.addOns?.reduce((initalValue, acc) => acc?.price + initalValue, 0);

  return (
    <div>
      <div className="price-container">
        <div className="descp-field main-field">
          <div>
            <p style={{ marginBottom: "0px" }}>
              {values?.plan} ({values?.planPeriod})
            </p>
            <button className="change-button add-on-descp" onClick={() => setStep(1)}>Change</button>
          </div>
          <p>
            ${values?.planPrice}/{periodSubtext}
          </p>
        </div>
        {values?.addOns?.length > 0 && <hr style={{ width: "100%" }} />}
        {values?.addOns?.map((item) => (
          <div className="descp-field add-on-descp">
            <p>{item.name}</p>
            <p>
              ${item.price}/{periodSubtext}
            </p>
          </div>
        ))}
      </div>
      <div className="descp-field add-on-descp">
        <p>Total (per {periodText})</p>
        <p className="total-pay">
          ${totlCost}/{periodSubtext}
        </p>
      </div>
    </div>
  );
};

export default Final;

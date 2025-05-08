import { Field, useField } from "formik";
import "./inputField.css";

interface IInputFieldProps {
  label: string;
  name: string;
  type?: string;
}

const InputField = ({
  label = "",
  name = "",
  type = "input",
}: IInputFieldProps) => {
  const [, meta] = useField(name);
  return (
    <div className="input-field">
      <div className="input-label">
        <label style={{ marginBottom: "10px" }}>{label}</label>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
      <Field
        className={`text-input ${meta.touched && meta.error && "error-border"}`}
        type={type}
        name={name}
      />
    </div>
  );
};

export default InputField;

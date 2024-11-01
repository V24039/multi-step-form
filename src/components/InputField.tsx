import { Field, useField } from "formik";

interface IInputFieldProps {
  label: string;
  name: string;
}

const InputField = ({ label, name }: IInputFieldProps) => {
  const [, meta] = useField(name);
  return (
    <div>
      <label>
        {label}
        <Field type="input" name={name} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;

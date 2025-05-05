import { Form } from "formik";
import InputField from "../InputField/InputField";

export const PersonalInfo = () => {
  return (
    <Form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <InputField label="Name" name="name" />
      <InputField label="Email Address" name="email" />
      <InputField label="Phone Number" name="phoneNumber" type="number" />
    </Form>
  );
};

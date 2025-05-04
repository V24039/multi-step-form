import InputField from "../InputField/InputField";

export const PersonalInfo = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
      <InputField label="Name" name="name" />
      <InputField label="Email Address" name="email" />
      <InputField label="Phone Number" name="phoneNumber" type="number"/>
    </div>
  );
};

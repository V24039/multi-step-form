import InputField from "../InputField";

export const PersonalInfo = () => {
  return (
    <>
      <InputField label="Name" name="name" />
      <InputField label="Email Address" name="email" />
      <InputField label="Phone Number" name="phoneNumber" />
    </>
  );
};

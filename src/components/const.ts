import { number, object, string } from "yup";

export interface IFormValues {
  name: string;
  email: string;
  phoneNumber: number;
  planPeriod: string;
  plan: string;
  addOns: Array<string>;
}

export const formInitialValues: IFormValues = {
  name: "",
  email: "",
  phoneNumber: 0,
  planPeriod: "",
  plan: "",
  addOns: [""],
};

export const FPersonalDetailsSchema = object({
  name: string().required("This field is required"),
  email: string().email("Invalid email").required("This field is required"),
  phoneNumber: number()
    .integer("Invalid phone number")
    .max(10, "Invalid phone number")
    .min(10, "Invalid phone number")
    .required("This field is required"),
});

export const PlanDetailsSchema = object({
  plan: string().required("Please select a plan"),
});

export const FormDetails = [
  {
    step: 0,
    validationSchema: FPersonalDetailsSchema,
    heading: "Personal info",
    description: "Please provide your name, email address, and phone number",
  },
  {
    step: 1,
    validationSchema: PlanDetailsSchema,
    heading: "Select your plan",
    description: "You have the option of monthly or yearly billing",
  },
  {
    step: 2,
    validationSchema: object(),
    heading: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience",
  },
  {
    step: 3,
    validationSchema: object(),
    heading: "Finishing up",
    description: "Double-check everything look OK before confirming",
  },
];

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
    step: 1,
    validationSchema: FPersonalDetailsSchema,
  },
  {
    step: 2,
    validationSchema: PlanDetailsSchema,
  },
];

import { Form } from "formik";
import SelectField from "./SelectField/SelectField";
import PlanPeriod from "./PlanPeriod/PlanPeriod";

import './selectPlan.css'

export const SelectPlan = () => {

  return (
    <Form className="plan-selection">
      <SelectField />
      <PlanPeriod />
    </Form>
  );
};

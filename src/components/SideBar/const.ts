export interface IStepInfoProps {
  stepIndex: number;
  stepName: string;
  active: boolean;
}

interface IStepData {
  key:string;
  stepIndex: number;
  stepName: string;
}

export const Steps: IStepData[] = [
  {
    key: "personalInfo",
    stepIndex: 1,
    stepName: "YOUR INFO",
  },
  {
    key: "planSelect",
    stepIndex: 2,
    stepName: "SELECT PLAN"
  },
  {
    key: "addOns",
    stepIndex: 3,
    stepName: "ADD-ONS",
  },
  {
    key: "summary",
    stepIndex: 4,
    stepName: "SUMMARY",
  }
];

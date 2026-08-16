import { useReducer } from "react";
import FormPage2 from "../../components/data/FormPage2";
import FormPage3 from "../../components/data/FormPage3";
import FormPage1 from "../../components/data/FormPage1";
import { initialFormState, formReducer } from "../../reducers/formReducer";
import { FormContext } from "../../context/FormContext";

export default function DataPage() {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext value={{ formState, formDispatch }}>
      {formState.currentStep === 0 && <FormPage1 />}
      {formState.currentStep === 1 && <FormPage2 />}
      {formState.currentStep === 2 && <FormPage3 />}
    </FormContext>
  );
}

function formReducer(state, action) {
  switch (action.type) {
    case "updateForm": {
      return {
        currentStep: state.currentStep,
        formData: { ...state.formData, ...action.nextFormData },
      };
    }
    case "increment_current_step": {
      return {
        formData: state.formData,
        currentStep: state.currentStep + 1,
      };
    }
    case "decrement_current_step": {
      return {
        formData: state.formData,
        currentStep: state.currentStep - 1,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialFormState = {
  formData: {
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    phoneNumber: "",
    password: "",
  },
  currentStep: 0,
};

export { formReducer, initialFormState };

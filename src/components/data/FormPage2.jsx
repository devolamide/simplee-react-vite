import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import "./Form.css";
import { FormContext } from "../../context/FormContext";

function Form() {
  const { formState, formDispatch } = useContext(FormContext);
  const [error, setError] = useState({ error: false, messgae: "" });
  const [form, setForm] = useState({ address: "", phoneNumber: "" });

  useEffect(() => {
    if (formState.formData) {
      setForm(() => ({
        address: formState.formData.address || "",
        phoneNumber: formState.formData.phoneNumber || "",
      }));
    }
  }, [formState.formData]);

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((df) => ({ ...df, [name]: e.target.value }));
  };

  const handlePrev = () => {
    formDispatch({
      type: "decrement_current_step",
    });
  };

  const onSubmitClick = async (e) => {
    try {
      e.preventDefault();
      const isValid = await formSchema.validate(form);
      if (!isValid) setError({ error: false, messgae: "" });
      formDispatch({
        type: "updateForm",
        nextFormData: form,
      });
      formDispatch({
        type: "increment_current_step",
      });
      //  save to global state
      // move to next step
    } catch (e) {
      setError({ error: true, messgae: e.toString() });
    }
  };

  const formSchema = Yup.object({
    address: Yup.string().required(),
    phoneNumber: Yup.string().required(),
  });

  return (
    <form>
      <div className="form-item">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          value={form.phoneNumber}
          type="text"
          name="phoneNumber"
          onChange={handleChange}
        />
      </div>
      <div className="form-item form-input-pswd">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>
      <div>{error.error && <div className="err-msg">{error.messgae}</div>}</div>
      <div className="form-item">
        <button onClick={handlePrev}>Prev</button>
        <button type="submit" onClick={onSubmitClick}>
          Next
        </button>
      </div>
    </form>
  );
}
export default Form;

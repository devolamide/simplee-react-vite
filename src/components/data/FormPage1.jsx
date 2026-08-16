import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import "./Form.css";
import { FormContext } from "../../context/FormContext";

function Form() {
  const { formState, formDispatch } = useContext(FormContext);
  const [error, setError] = useState({ error: false, messgae: "" });
  const [form, setForm] = useState({ email: "", firstname: "", lastname: "" });

  useEffect(() => {
    if (formState.formData) {
      setForm(() => ({
        email: formState.formData.email || "test@test.com",
        lastname: formState.formData.lastname || "",
        firstname: formState.formData.firstname || "",
      }));
    }
  }, [formState.formData]);

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((df) => ({ ...df, [name]: e.target.value }));
  };

  const onSubmitClick = async (e) => {
    try {
      console.log(1);
      e.preventDefault();
      console.log(2);
      const isValid = await formSchema.validate(form);
      console.log(3);
      if (!isValid) setError({ error: false, messgae: "" });
      console.log(4);
      formDispatch({
        type: "updateForm",
        nextFormData: form,
      });
      console.log(5);
      formDispatch({
        type: "increment_current_step",
      });
    } catch (e) {
      console.log("catch");
      setError({ error: true, messgae: e.toString() });
    }
  };

  const formSchema = Yup.object({
    email: Yup.string().email().required(),
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
  });

  return (
    <form>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input
          value={form.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="lastname">lastname</label>
        <input
          value={form.lastname}
          type="text"
          name="lastname"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="firstname">firstname</label>
        <input
          value={form.firstname}
          type="text"
          name="firstname"
          onChange={handleChange}
        />
      </div>
      <div>{error.error && <div className="err-msg">{error.messgae}</div>}</div>
      <div className="form-item">
        <button type="submit" onClick={onSubmitClick}>
          Next
        </button>
      </div>
    </form>
  );
}
export default Form;

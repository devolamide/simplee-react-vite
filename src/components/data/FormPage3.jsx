import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import "./Form.css";
import Eye from "~/assets/svgs/Eye";
import EyeOff from "~/assets/svgs/EyeOff";
import { FormContext } from "~/context/FormContext";

function Form() {
  const { formState, formDispatch } = useContext(FormContext);
  const [error, setError] = useState({ error: false, messgae: "" });
  const [form, setForm] = useState({ password: "", retypePassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  useEffect(() => {
    if (formState.formData) {
      setForm(() => ({
        password: formState.formData.password || "",
        retypePassword: formState.formData.password || "",
      }));
    }
  }, [formState.formData]);

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((df) => ({ ...df, [name]: e.target.value }));
  };

  const onSubmitClick = async (e) => {
    try {
      e.preventDefault();
      const isValid = await formSchema.validate(form);
      if (!isValid) setError({ error: false, messgae: "" });
      // add data to global state
      // submit entire form data from global state
      // navigate("/hero");
      formDispatch({
        type: "updateForm",
        nextFormData: form,
      });
      // formDispatch({
      //   type: "increment_current_step",
      // });
      console.log("final form data ", formState.formData);
    } catch (e) {
      setError({ error: true, messgae: e.toString() });
    }
  };
  const toggleShowPassword = () => setShowPassword((pswd) => !pswd);
  const toggleShowRetypePassword = () => setShowRetypePassword((pswd) => !pswd);

  const formSchema = Yup.object({
    password: Yup.string().required(),
    retypePassword: Yup.string().required(),
  });

  const handlePrev = () => {
    formDispatch({
      type: "decrement_current_step",
    });
  };

  return (
    <form>
      <div className="form-item form-input-pswd">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <div className="pswd-toggle" onClick={toggleShowPassword}>
          {!showPassword ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <div className="form-item form-input-pswd">
        <label htmlFor="retypePassword">Retype Password</label>
        <input
          type={showRetypePassword ? "text" : "password"}
          name="retypePassword"
          value={form.retypePassword}
          onChange={handleChange}
        />
        <div className="pswd-toggle" onClick={toggleShowRetypePassword}>
          {!showRetypePassword ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <div>{error.error && <div className="err-msg">{error.messgae}</div>}</div>
      <div className="form-item">
        <button onClick={handlePrev}>Prev</button>
        <button type="submit" onClick={onSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;

import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import "./Form.css";
import Eye from "../assets/svgs/Eye";
import EyeOff from "../assets/svgs/EyeOff";

function Form() {
  const navigate = useNavigate();
  const [error, setError] = useState({ error: false, messgae: "" });
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((df) => ({ ...df, [name]: e.target.value }));
  };

  const onSubmitClick = async (e) => {
    try {
      e.preventDefault();
      const isValid = await formSchema.validate(form);
      setError({ error: false, messgae: "" });
      console.log("isVlid ", isValid);
      console.log("values", form);
      navigate("/hero");
    } catch (e) {
      setError({ error: true, messgae: e.toString() });
    }
  };
  const toggleShowPassword = () => setShowPassword((pswd) => !pswd);

  const formSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <form>
      <div className="form-item">
        <input
          value={form.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-item form-input-pswd">
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
      <div>{error.error && <div className="err-msg">{error.messgae}</div>}</div>
      <div className="form-item">
        <button type="submit" onClick={onSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;

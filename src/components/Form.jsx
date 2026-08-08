import { useState } from "react";
import "./Form.css";
import Eye from "../assets/svgs/Eye";
import EyeOff from "../assets/svgs/EyeOff";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log("values", { email, password });
  };
  const toggleShowPassword = () => setShowPassword((pswd) => !pswd);

  return (
    <form>
      <div className="form-item">
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-item form-input-pswd">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={email}
          onChange={handlePasswordChange}
        />
        <div className="pswd-toggle" onClick={toggleShowPassword}>
          {!showPassword ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <div className="form-item">
        <button type="submit" onClick={onSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;

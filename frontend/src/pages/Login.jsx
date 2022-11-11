import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {email, password} = formData;

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section className="heading">
        <div>
          <h2>
            <FaSignInAlt /> Register
          </h2>
        </div>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

          <div className="form-group">
            <label> email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="enter your email" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> password </label>
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="enter your password" onChange={onChange} />
          </div>

          <div className="form-group">
            <button className="btn-block btn" type="submit">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
}

export default Login;

import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, surname, email, password, confirmPassword } = formData;

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
            <FaUser /> Register
          </h2>
        </div>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label> name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} placeholder="enter your name" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> surname</label>
            <input type="text" className="form-control" id="surname" name="surname" value={surname} placeholder="enter your surname" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="enter your email" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> password </label>
            <input type="password" className="form-control" id="password" name="password" value={password} placeholder="enter your password" onChange={onChange} />
          </div>

          <div className="form-group">
            <label> confirm your password </label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={name} placeholder="confirm your name" onChange={onChange} />
          </div>

          <div className="form-group">
            <button className="btn-block btn" type="submit">Submit</button>
          </div>

        </form>
      </section>
    </>
  );
}

export default Register;

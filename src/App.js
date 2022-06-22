import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Field required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Username should be an email";
  }

  if (!values.password) {
    errors.password = "Field required";
  }

  return errors;
};

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Login Successful");
      console.info("success:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Email */}
      <section>
        <label htmlFor="email">Username</label>
        <input
          id="emailField"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" className="errorMsg">
            {formik.errors.email}
          </div>
        ) : null}
      </section>

      {/* Password */}
      <section>
        <label htmlFor="password">Password</label>
        <input
          id="pswField"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" className="errorMsg">
            {formik.errors.password}
          </div>
        ) : null}
      </section>

      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;

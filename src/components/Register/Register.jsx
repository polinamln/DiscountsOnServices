import { RxCross2 } from "react-icons/rx";
import css from "./Register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../api";

export default function Register({ setModalRegister }) {
  // const handleSubmit = async (values) => {
  //   // e.preventDefault();
  //   try {
  //     const res = await register(values);
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className={css.modal}>
      <div className={css.box}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <div className={css.cross} onClick={() => setModalRegister(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
      </div>

      <div className={css.textBox}>
        <h2 className={css.title}>Create an account</h2>
        <div className={css.textBoxLink}>
          <p className={css.newUser}>Already have an account?</p>
          <p className={css.create}>Sign In</p>
        </div>
      </div>

      <Formik
        initialValues={{ password: "", email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.password) {
            errors.password = "Password is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          }
          if (!values.name) {
            errors.name = "User name is required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const res = await register(values);
            console.log("Form submitted with values:", values);
            console.log(res);
            resetForm();
          } catch (e) {
            console.log("Server response:", e.response);
            alert(e.response.data.message || "An error occurred");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <label htmlFor="name" className={css.label}>
                User name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.fieldWrapper}>
              <label htmlFor="email" className={css.label}>
                Email Address
              </label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Enter your e-mail"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldWrapper}>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={css.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>

            <button
              disabled={isSubmitting}
              className={css.btnLogin}
              type="submit"
            >
              Sing up
            </button>
          </Form>
        )}
      </Formik>

      {/* <label>
        <input
          className={css.checkbox}
          type="checkbox"
          // checked={isChecked}
          // onChange={handleCheckboxChange}
        />
        By creating an account you agree to our Privacy Policy and Terms of
        Service.
      </label> */}

      <div className={css.boxS}>
        <div className={css.line}></div>
        <p className={css.lineText}>Or sign in with</p>
        <div className={css.line}></div>
      </div>

      <ul className={css.loginList}>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image10.png"></img>
        </li>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image11.png"></img>
        </li>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image12.png"></img>
        </li>
      </ul>

      <p className={css.texts}>
        Protected by reCAPTCHA and subject to the Google Privacy Policy and
        Terms of Service.
      </p>
    </div>
  );
}

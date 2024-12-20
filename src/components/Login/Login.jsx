import { RxCross2 } from "react-icons/rx";
import css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Login({ setModalLogin, setModalRegister }) {
  const handleRegister = () => {
    setModalLogin(false);
    setModalRegister(true);
  };

  return (
    <div className={css.modal}>
      <div className={css.box}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <div className={css.cross} onClick={() => setModalLogin(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
      </div>

      <div className={css.textBox}>
        <h className={css.title}>Log in</h>
        <div className={css.textBoxLink}>
          <p className={css.newUser}>New user? </p>
          <p className={css.create} onClick={handleRegister}>
            Create an account
          </p>
        </div>
      </div>

      <Formik
        initialValues={{ password: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.password) {
            errors.password = "Password is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted with values:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
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
              Login
            </button>
          </Form>
        )}
      </Formik>

      <a className={css.forgot} href="#">
        Forgot password?
      </a>

      <div className={css.boxS}>
        <div className={css.line}></div>
        <p className={css.lineText}>Or sign in with</p>
        <div className={css.line}></div>
      </div>

      <ul className={css.loginList}>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image 10.png"></img>
        </li>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image 11.png"></img>
        </li>
        <li className={css.loginListItem}>
          <img className={css.loginListImg} src="/image 12.png"></img>
        </li>
      </ul>

      <p className={css.texts}>
        Protected by reCAPTCHA and subject to the Google Privacy Policy and
        Terms of Service.
      </p>
    </div>
  );
}

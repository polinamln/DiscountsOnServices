import { RxCross2 } from "react-icons/rx";
import css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";

export default function Login({ setModalLogin }) {
  const navigate = useNavigate();

  return (
    <div className={css.modal}>
      <div className={css.box}>
        <img className={css.logo} src="/logo.png" alt="logo"></img>
        <div className={css.cross} onClick={() => setModalLogin(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
      </div>

      <div className={css.textBox}>
        <h2 className={css.title}>Log in</h2>
        <div className={css.textBoxLink}>
          <p className={css.newUser}>New user? </p>
          <p className={css.create}>Create an account</p>
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
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const res = await login(values);

            const { token } = res.user;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(res.user));

            navigate("/");
            console.log("Form submitted with values:", {
              email: values.email,
              password: values.password,
            });
            console.log("user info:", res);

            resetForm();
          } catch (e) {
            console.error(e);
          } finally {
            setSubmitting(false);
          }
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

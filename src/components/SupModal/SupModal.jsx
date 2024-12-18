import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SupModal.module.css";
import { RxCross2 } from "react-icons/rx";

export default function StartModal({ setModalSup }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setModalSup(false);
    }
  };

  // const handleModals = () => {
  //   setModalSup(false);
  // };

  return (
    <div className={css.back} onClick={handleClose}>
      <div className={css.container}>
        <div className={css.cross} onClick={() => setModalSup(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
        <h2 className={css.title}>Support Application</h2>
        <p className={css.text}>
          We will call you within <span>an hour!</span>
        </p>
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is required";
            }
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.phone) {
              errors.phone = "Phone number is required";
            } else if (!/^\+?[1-9]\d{1,14}$/i.test(values.phone)) {
              errors.phone = "Invalid phone number";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setModalSup(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.fieldWrapper}>
                <label htmlFor="name" className={css.label}>
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className={css.input}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.fieldWrapper}>
                <label htmlFor="email" className={css.label}>
                  Email
                </label>
                <Field
                  type="email"
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
                <label htmlFor="phone" className={css.label}>
                  Phone
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  className={css.input}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.error}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./PayModal.module.css";
import { RxCross2 } from "react-icons/rx";
import Icon from "../Icon";

export default function PayModal({ setModalPay, setModalPaid }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setModalPay(false);
    }
  };

  const handlePaid = () => {
    setModalPaid(true);
    setModalPay(false);
  };

  return (
    <div className={css.back} onClick={handleClose}>
      <div className={css.container}>
        <div className={css.cross} onClick={() => setModalPay(false)}>
          <RxCross2 className={css.crossIcon} />
        </div>
        <h2 className={css.title}>Purchase Payment</h2>

        <div className={css.payBtns}>
          <button type="button " className={css.payBtn}>
            <Icon name="icon-GPay" h="18px" w="39px" />
          </button>
          <button type="button " className={css.payBtn}>
            <Icon name="icon-APay" h="18px" w="39px" />
          </button>
        </div>

        <Formik
          initialValues={{ cardNumber: "", expirationDate: "", cvc: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.cardNumber) {
              errors.cardNumber = "Card number is required";
            } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(values.cardNumber)) {
              errors.cardNumber = "Invalid card number format";
            }
            if (!values.expirationDate) {
              errors.expirationDate = "Expiration date is required";
            } else if (
              !/^(0[1-9]|1[0-2])\/\d{2}$/.test(values.expirationDate)
            ) {
              errors.expirationDate = "Invalid expiration date format (MM/YY)";
            }
            if (!values.cvc) {
              errors.cvc = "CVC is required";
            } else if (!/^\d{3}$/.test(values.cvc)) {
              errors.cvc = "CVC must be 3 digits";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.fieldWrapper}>
                <label htmlFor="cardNumber" className={css.label}>
                  Card Number
                </label>
                <Field
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  className={css.input}
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <label htmlFor="expirationDate" className={css.label}>
                  Expiration Date (MM/YY)
                </label>
                <Field
                  type="text"
                  name="expirationDate"
                  id="expirationDate"
                  placeholder="MM/YY"
                  className={css.input}
                />
                <ErrorMessage
                  name="expirationDate"
                  component="div"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <label htmlFor="cvc" className={css.label}>
                  CVC
                </label>
                <Field
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="CVC"
                  className={css.input}
                />
                <ErrorMessage
                  name="cvc"
                  component="div"
                  className={css.error}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
                onClick={handlePaid}
              >
                Pay with card
              </button>
            </Form>
          )}
        </Formik>

        <p className={css.p}>
          We do not collect information on your cards, everything is safe
        </p>

        <h3 className={css.titleS}>Payment by crypto wallet</h3>
        <Formik
          initialValues={{ currency: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.fieldWrapper}>
                <label htmlFor="currency" className={css.label}>
                  Select Currency
                </label>
                <Field
                  as="select"
                  name="currency"
                  id="currency"
                  className={css.input}
                >
                  <option value="">Choose currency</option>
                  <option value="BTC">Bitcoin</option>
                  <option value="ETH">Ethereum</option>
                </Field>
                <ErrorMessage
                  name="currency"
                  component="div"
                  className={css.error}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
                onClick={handlePaid}
              >
                Pay
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

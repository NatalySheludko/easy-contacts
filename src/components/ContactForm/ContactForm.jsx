import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),

  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
		dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleAddContact}
    >
      <Form className={css.form}>
        <div className={css.formFields}>
          <label className={css.formInputLabel} htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label className={css.formInputLabel} htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

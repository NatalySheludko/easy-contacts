import css from "../MessageError/MessageError.module.css";

export default function MessageError({ children }) {
  return <p className={css.textError}>{children}</p>;
}

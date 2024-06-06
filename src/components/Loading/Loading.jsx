import css from "../Loading/Loading.module.css";

export default function Loading({ children }) {
  return <p className={css.textLoader}>{children}</p>;
}

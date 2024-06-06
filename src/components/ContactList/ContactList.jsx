import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const items = useSelector(selectFilteredContacts);

  return (
    <div className={css.wrap}>
      <ul className={css.menuList}>
        {items.map((item) => (
          <li className={css.item} key={item.id}>
            <Contact item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

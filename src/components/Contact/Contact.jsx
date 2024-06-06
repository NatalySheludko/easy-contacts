import css from "../Contact/Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ item }) {
	const dispatch = useDispatch();
	
  const handleDeleteContact = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <div className={css.contacts}>
      <div>
        <div className={css.icon}>
          <FaUser />
          <p className={css.name}>{item.name}</p>
        </div>
        <div className={css.icon}>
          <FaPhone />
          <p className={css.name}>{item.number}</p>
        </div>
      </div>
      <div>
        <button className={css.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </div>
  );
}

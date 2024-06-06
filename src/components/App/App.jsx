import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "../App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Loading from "../Loading/Loading";
import MessageError from "../MessageError/MessageError";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.app}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <MessageError>Error message!</MessageError>}
      {isLoading && <Loading>Request in progress...</Loading>}
      <ContactList />
    </div>
  );
}

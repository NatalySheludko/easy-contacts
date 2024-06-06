import { useDispatch, useSelector } from "react-redux";
import css from "../SearchBox/SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { useId } from "react";

export default function SearchBox() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const name = useSelector(selectNameFilter);

  const handleFindName = (event) => {
    dispatch(changeFilter(event.target.value.toLowerCase()));
	};
	

  return (
    <div className={css.filter}>
      <label className={css.inputLabel} htmlFor={`${fieldId}-name`}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={`${fieldId}-name`}
        type="text"
        value={name}
        onChange={handleFindName}
      />
    </div>
  );
}

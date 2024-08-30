import { useState } from "react";
import "./styles/TodoSearch.css";

export const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <input
      placeholder="Cortar cebolla"
      value={searchValue}
      className="TodoSearch"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

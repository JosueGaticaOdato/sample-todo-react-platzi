import "./styles/TodoSearch.css";

export const TodoSearch = ({searchValue, setSearchValue}) => {

  return (
    <input
      placeholder="Escribe alguna tarea"
      value={searchValue}
      className="TodoSearch"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

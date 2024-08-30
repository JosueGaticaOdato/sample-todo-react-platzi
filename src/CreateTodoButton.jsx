import './styles/CreateTodoButton.css'

export const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) =>
        console.log(event)
      }
    >
      +
    </button>
  );
};

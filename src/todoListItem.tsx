import Todo from "./todoInterface";

type TodoProps = {
    todo: Todo,
    onToggle(id: number): void
}

const TodoListItem = ({ todo, onToggle }: TodoProps): React.ReactElement => {

    const { id, content, checked } = todo;

    return (
        <div className="todo-item">
            <input type="checkbox" checked={ checked } onClick={() => onToggle(id)}/>
            <p className={`${checked ? "checked":"unchecked"}`}>{ content }</p>
        </div>
    );
};

export default TodoListItem;
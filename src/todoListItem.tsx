import Todo from "./todoInterface";
import React from "react";

type TodoProps = {
    todo: Todo,
    onToggle(id: number): void
}

const TodoListItem = ({ todo, onToggle }: TodoProps): React.ReactElement => {

    console.log("render");

    const { id, content, checked } = todo;

    return (
        <div className="todo-item">
            <input type="checkbox" checked={ checked } onClick={() => onToggle(id)}/>
            <p className={`${checked ? "checked":"unchecked"}`}>{ content }</p>
        </div>
    );
};

const areEqual = (prevProps: TodoProps, nextProps: TodoProps):boolean => {
    return (
        prevProps.todo === nextProps.todo
    );
};

const MemoizedTodoListItem = React.memo(TodoListItem, areEqual);

export default MemoizedTodoListItem;
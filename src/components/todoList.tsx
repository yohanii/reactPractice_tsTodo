import {useCallback, useRef, useState} from "react";
import Todo from "./todoInterface";
import MemoizedTodoListItem from "./todoListItem";

const TodoList = (): React.ReactElement => {

    const [todos, setTodos] = useState<Array<Todo>>([]);
    const input = useRef<HTMLInputElement | null>(null);

    const nextId = useRef<number>(1);
    const addTodo = ():void => {

        if (!input.current) return;

        setTodos([...todos, {
            id: nextId.current,
            content: input.current.value,
            checked: false
        }]);
        nextId.current++;
    }

    const onToggle = useCallback(
        (id:number):void => {
            console.log("todos: " + todos);
            setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked} : todo)))
        },
        [todos]
    );

    return (
        <div>
            <header>
                <h1>SimpleTodo</h1>
            </header>

            <article>
                <input id="todo-input" type="text" placeholder="추가할 할 일을 입력하세요!" ref={ input }/>
                <button id="addBtn" onClick={ addTodo }>추가</button>
            </article>

            <section id="todo-list">
                {todos.map((todo:Todo) => (
                    <MemoizedTodoListItem todo={ todo } onToggle={ onToggle }/>
                ))}
            </section>
        </div>
    );
};

export default TodoList;
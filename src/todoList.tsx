import {useCallback, useRef, useState} from "react";
import TodoListItem from "./todoListItem";
import Todo from "./todoInterface";

const TodoList = (): React.ReactElement => {

    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [input, setInput] = useState<string>("");

    const nextId = useRef<number>(1);
    const addTodo = ():void => {
        setTodos([...todos, {
            id: nextId.current,
            content: input,
            checked: false
        }]);
        nextId.current++;
    }

    const onToggle = useCallback(
        (id:number):void => {
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
                <input id="todo-input" type="text" placeholder="추가할 할 일을 입력하세요!" onChange={(e) => setInput(e.target.value)}/>
                <button id="addBtn" onClick={ addTodo }>추가</button>
            </article>

            <section id="todo-list">
                {todos.map((todo) => (
                    <TodoListItem todo={ todo } onToggle={ onToggle }/>
                ))}
            </section>
        </div>
    );
};

export default TodoList;
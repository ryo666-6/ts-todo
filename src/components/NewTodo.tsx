import React, { useRef } from "react";
import './NewTodo.css'

type NewtodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewtodoProps> = props => {

    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (<form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor='todo-text'>Todo内容</label>
            <input id='todo-text' type='text' ref={textInputRef}/>
        </div>
        <button type='submit'>Todo追加</button>
    </form>
    )
}

export default NewTodo;
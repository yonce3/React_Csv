import { useState } from "react";
import { isPropertySignature } from "typescript";
import AddButton from "./AddButton";

export default function ToDoTextField(props: any) {

    const [todo, setTodo] = useState("");

    return (
        <div>
            <form onSubmit={handleClick}>
                <input value={todo} onChange={(event) => setTodo(event.target.value)}></input>
                <input type="submit" value="Add Todo"/>
            </form>
        </div>
    )

    function handleClick() {
        //console.log(todo)
        props.addClick()
        //ssetTodo("")
    }
}
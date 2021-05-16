import { useState } from "react"

export default function AddButton(props: any) {
    const [title, setTitle] = useState("test");

    return (
        <button onClick={props.onclick}>{title}</button>
    )
}
import { useState } from "react"

export default function AddButton() {
    const [title, setTitle] = useState("test");

    return (
        <button onClick={() => setTitle("Hello")}>{title}</button>
    )
}
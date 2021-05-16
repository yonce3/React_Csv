import React from 'react';

interface Props {
    item: Todo;
}

interface Todo {
    id: Number,
    todo: String
}

export default function ToDoItem(props: Props) {
    return (
        <>
            <h2>{props.item.todo}</h2>
        </>
    )
}

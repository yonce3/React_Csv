import React from 'react';
import ToDoItem from './ToDoItem';

interface Todo {
    id: Number,
    todo: String
}

interface Props {
    todoItems: Array<Todo>;
}

export default class ToDoList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
                this.props.todoItems.map((item) =>
                    <ToDoItem item={item} />
                )
        )
    }
    
}

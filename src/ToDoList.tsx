import React from 'react';
import ToDoItem from './ToDoItem';

interface Props {
    todoItems: Array<String>;
}

const sampleList = ["hello", "world", "hoge"];

export default class ToDoList extends React.Component<Props> {
    constructor(props: any) {
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
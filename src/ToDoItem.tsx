import React from 'react';

interface Props {
    item: String;
}

export default class ToDoItem extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>{this.props.item}</h1>
            </>
        );
    }
}
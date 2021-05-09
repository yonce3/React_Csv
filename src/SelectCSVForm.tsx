import React from 'react';
import styled from 'styled-components';

interface Props {
    
}

export default class SelectCSVForm extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
    }
    render() {
        return (
            <form >
                <label>Select File: 
                    <input type="file" />
                </label>
                <label>Name:
                    <input type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


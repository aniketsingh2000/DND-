import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
margin-bottom:8px;
padding:8px;
border-radius:2px;
// border:1px solid lightgray;
background: ${props => (props.isDragging ? 'lightblue' : '#fff')};
display : flex;
min-height:50px

`;

const Handle = styled.div`
width: 20px;
height : 20px;
margin-right: 10px;
border-radius: 3px;
background-color : orange;

`;



export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index} >
                {(provided, snapshot) => (
                    <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
                        <Handle />
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}
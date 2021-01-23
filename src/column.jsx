import React from 'react';
import styled from 'styled-components';
import { Droppable ,Draggable } from 'react-beautiful-dnd';
import Task from './task';


const Container = styled.div`
margin:8px;
// border:1px solid lightgray;
border-radius: 2px;
width : 300px;
min-height: 300px;
background:#f4f5f7;
display : flex;
flex-direction : column;
`;
const Title = styled.h3`
padding:8px;
`;
const TaskList = styled.div`
padding:8px;
transition : background 0.2 ease;
flex-grow: 1;
min-height: 100px;
// background : ${props => (props.isDraggingOver ? '#eef' : '#fff')};
`;

export default class Column extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index} >
                {provided => (
            <Container {...provided.draggableProps} ref={provided.innerRef}>
                <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} type="task">
                    {(provided, snapshot) => (
                        <TaskList ref={provided.innerRef}  {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
            )}
            </Draggable>
        );

    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class Todos extends Component {

    render() {
        let todoItems;
        if (this.props.todos){
            //For each object in property 'projects', map that item to projectItems and return a ProjectItem component 
            todoItems = this.props.todos.map(todo =>{
                console.log(todo);
                return (
                    <TodoItem key={todo.title} todo={todo}/>
                );
            });
        }
        //console.log(this.props);
        return (
        <div className="Todos">
            <h3>Todo List</h3>
            {todoItems}
        </div>
        );
    }
}

Todos.propTypes = {
    todos:PropTypes.array,
   
}

export default Todos;

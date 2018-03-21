import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class TodoList extends React.Component{

    render(){
        return (
            <div>
                <ol>
                {
                    this.props.todoList.map((todo, idx)=>{
                        return (
                            <li key={todo}>
                                {todo}

                                <button
                                    className="btn__action"
                                    onClick={()=>this.props.onDeleteTodo(idx)}>Delete</button>

                                <button
                                className="btn__action"
                                onClick={()=>this.props.onSelectTodo(idx)}>Edit</button>
                            </li>
                        )
                    })
                }
                </ol>
            </div>
        )
    }
}

TodoList.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
    todoList: PropTypes.array
};

export default TodoList;
import React from 'react';
import TodoList from './components/Todo/List';
import TodoInput from './components/Todo/Input';



export default class Task2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: ["sadsadsad", "asdsadasdasd", "ppsadddddddddd"],
            selectedTodo: null,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd(text) {

        let todoList = this.state.todoList;
        todoList.push(text);

        this.setState({
            todoList,
            selectedTodo: ''
        });
    }

    handleEdit(idx){

        let todoList = this.state.todoList;
        let todo = todoList[idx];

        todoList.splice(idx,1);

        this.setState({
            todoList,
            selectedTodo: todo
        });
    }

    handleDelete(idx){

        let todoList = this.state.todoList;
        todoList.splice(idx,1);

        this.setState({
            todoList
        });
    }

    render() {
        return (
            <React.Fragment>
                <TodoInput handleAdd={this.handleAdd} selectedTodo={this.state.selectedTodo}/>

                <TodoList todoList={this.state.todoList}
                          onDeleteTodo={this.handleDelete}
                          onSelectTodo={this.handleEdit}/>
            </React.Fragment>
        )
    }
}
import React from 'react';
import './style.css';


class TodoInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedTodo!== this.props.selectedTodo) {
            let selTodo = nextProps.selectedTodo;


            if (selTodo !== undefined && selTodo !== null && selTodo !== "") {
                this.setState({
                    text: selTodo
                });
            }
        }
    }

    handleChange(e){
        if(e.target && e.target.value.length>=0)
            this.setState({
                text: e.target.value,
            });
    }

    handleSubmit(){
        if(this.state.text.length>=0) {
            this.props.handleAdd(this.state.text);
            this.setState({
                text: ''
            });
        }
    }

    render(){

        let {selectedTodo} = this.props;
        let btnText = (selectedTodo===null || selectedTodo.length===0)?"Add":"Update";

        return (
            <div>
                <input type="text" name="todo"
                       value={this.state.text}
                       onChange={this.handleChange.bind(this)}
                       placeholder="enter something&hellip;"/>

                <input type="submit" name="submit" value={btnText}
                       onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default TodoInput;
import React from 'react';
import { withFormsy } from 'formsy-react';


export class Input extends React.Component{

    constructor(props){
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e){
        this.props.setValue(e.currentTarget.value);
    }

    render(){
        let errorMessage = this.props.getErrorMessage();

        return (
            <div>
                <label>{this.props.heading}</label>
                <input type="text"
                onChange={this.changeValue}
                value={this.props.getValue()||''}/>
                <p className={"message--danger"}>{errorMessage}</p>
            </div>
        );
    }

}

export default withFormsy(Input);
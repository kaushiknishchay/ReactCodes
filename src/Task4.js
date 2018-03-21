import React from 'react';
import AdvInput from './components/Formsy/Input';
import Formsy from 'formsy-react';


export default class Task4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            canSubmit: null
        };
    }

    render() {
        return (
            <div>
                <h1>Formsy Test</h1>
                <Formsy
                    onValidSubmit={() => alert('works')}
                    onValid={() => this.setState({canSubmit: true})}
                    onInvalid={() => this.setState({canSubmit: false})}
                >
                    <AdvInput
                        heading={"Email"}
                        name="todoText"
                        validations="isEmail"
                        validationError={"Enter valid email."}
                        required
                    />
                    <AdvInput
                        heading={"Password"}
                        name="password"
                        title="Password"
                        type="password"
                        required
                    />
                    <button
                        type="submit"
                        disabled={!this.state.canSubmit}
                    >
                        Submit
                    </button>
                </Formsy>
            </div>
        );
    }

}
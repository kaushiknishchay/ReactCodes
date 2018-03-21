import React from 'react';


export default class Task1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            selectbox: '',
            checkbox: true

        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        // e.preventDefault();

        let name = e.target.name;

        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name"
                               value={this.state.name} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        <input type="radio" name="gender" value="male" onChange={this.handleChange}/> Male
                        <input type="radio" name="gender" value="female" onChange={this.handleChange}/> Female
                    </label>
                </div>
                <div>
                    <label>
                        Select:
                        <select name="selectbox" value={this.state.selectbox} onChange={this.handleChange}>
                            <option value=""/>
                            <option value="react">React</option>
                            <option value="native">Native</option>
                            <option value="angular">Angular</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Checkbox:
                        <input type="checkbox" name="checkbox"
                               checked={this.state.checkbox}
                               onChange={this.handleChange}/> Check It!
                    </label>
                </div>
                <input type="submit" value="Submit"/>
            </form>

        );
    }
}
import React, { Component, Fragment } from 'react';

class Select extends Component {
    render() {
        console.log('dfadskf', this.props.optionSkills)
        return (
            <select name="" id="">
                {this.props.optionSkills.map((skill) =>
                    <option value={skill}>{skill}</option>
                )
                }
            </select>
        );
    }
}

export default Select;
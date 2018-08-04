import React, { Component, Fragment } from 'react';

class Select extends Component {
    render() {
        const skillOptions = this.props.skillOptions;
        return (
            <div className="form__container-select">
                <select name="" id="" className="form__select">
                    {skillOptions.map((skill, i) =>
                        <option
                            key={i}
                            value={skill}>
                            {skill}
                        </option>
                    )
                    }
                </select>
                <div id="mama">
                    <button
                        type="button"
                        id="fetch"
                        className="button"
                        // onClick={this.handleAbilities}
                        >
                        <div className="content-button-habilities">
                            +
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Select;
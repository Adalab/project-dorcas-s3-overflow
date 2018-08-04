import React, { Component, Fragment } from 'react';

class Select extends Component {
    render() {
        const {
            skillOptions,
            onClickAbilityButton,
            onChangeAbilitySelect,
            buttonIcon = { buttonIcon }
        } = this.props;
        return (
            <div className="form__container-select">
                <select name="" id=""
                    className="form__select"
                    onChange={onChangeAbilitySelect}>
                    {skillOptions.map((skill, i) =>
                        <option
                            key={i}
                            value={skill}>
                            {skill}
                        </option>
                    )}
                </select>
                <div id="mama">
                    <button
                        type="button"
                        id="fetch"
                        className="button"
                        onClick={onClickAbilityButton}
                    >
                        <div className="content-button-habilities">
                            {buttonIcon}
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Select;
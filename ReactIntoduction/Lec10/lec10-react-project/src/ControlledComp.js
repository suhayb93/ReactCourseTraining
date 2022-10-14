import React from 'react';


class ControlledComp extends React.Component {

    onTextChange = (e) => {
        console.log(e.target.type)
    }

    onSelect = (e) => {
        console.log(e.target.type)
    }

    onChecked = (e) => {
        console.log(e.target.type)
        console.log(e.target.checked)

    }

    render() {

        return (
            <div style={{ padding: '30px' }}>
                <div>
                    <input type="text" onChange={this.onTextChange} />

                </div>
                <div>
                    <select onChange={this.onSelect}>
                        <option value="option1">option 1</option>
                        <option value="option2">option 1</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="checkbox">check box</label>
                    <input type="checkbox" onChange={this.onChecked} id={'checkbox'} />
                </div>

            </div >
        )
    }
}

export default ControlledComp;
import React from 'react';


class AsyncStateComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            something: 'Hello',
            count: 0,
            person: {
                name: 'ahmad',
                age: 20
            }
        }
    }

    async changeState() {

        this.setState({
            person: {
                ...this.state.person,
                name: 'Khaled'
            }
        })
    }

    render() {
        console.log('I am render function');
        return (
            <div>
                <div>
                    <div>{this.state.person.name}</div>
                    <div>{this.state.person.age}</div>
                </div>
                <button onClick={this.changeState.bind(this)}>Call SetStat</button>
                {/* <div>{this.state.count}</div> */}
            </div>
        )
    }
}

export default AsyncStateComp;
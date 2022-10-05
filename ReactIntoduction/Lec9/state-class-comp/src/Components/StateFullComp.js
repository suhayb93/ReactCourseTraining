import React from 'react';

class StateFullComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstState: '',
            count: 0,
            obj: {
                name: 'Ahmad',
                age: '20'
            }

        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('Component Did mount');
    }


    changeState() {
        // console.log(this)
        this.setState({ firstState: 'Hello World' })
        this.setState({
            obj: {
                name: 'samar'
            }
        }, () => {
            console.log(this.state.obj);
        })

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Did Update', prevProps, prevState)

        //you should not change the state here without condition 
        // this.setState({})
    }

    componentWillUnmount() {
        console.log('Component Will Un Mounted and removed')
    }

    someProcessing() {
        //... some code 

        this.setState({
            count: 4
        })
        console.log(this.state.count)
    }
    increment() {
        this.someProcessing()
        // this.setState({ count: this.state.count += 1 })
        this.setState((state) => {
            state.count += 1
            return state
        })
    }


    render() {
        console.log('Rendering')
        return (
            <div>
                <div>I am State Full React </div>
                <button onClick={this.changeState.bind(this)}>Say Hello</button>
                <div>{this.state.firstState}</div>
                <div style={{ marginTop: '20px' }}>
                    <button style={{ marginRight: '5px' }} onClick={this.increment.bind(this)}>Increment Count</button>

                    <span>Count: {this.state.count}</span>

                </div>

            </div>
        )
    }
}

export default StateFullComponent;

//////////////
var obj = {
    fn: myFn,
    a: 4
}

function myFn() {
    console.log(this.a);
}
//////////////////////
obj.fn()// 4

var x = obj.fn();
x();//undefined


main(obj.fn.bind(obj));

function main(callBack) {
    callBack() //undefined
}
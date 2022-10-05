import './App.css';
import React, { Component } from 'react';

// import StateFullComponent from './Components/StateFullComp';

// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       showChild: true
//     }
//   }

//   distroyComp() {
//     this.setState({
//       showChild: false
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>
//           <button onClick={this.distroyComp.bind(this)}>Distroy Component</button>
//         </div>
//         {this.state.showChild ?
//           <StateFullComponent />

//           : null}

//       </div>
//     );
//   }

// }

const Child = (props) => {
  return (
    <div>{props.car}</div>
  )
}





class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      greeting: 'hello',
      hi: 'hi',
      x: 'x'
    }

    console.log('constructor');

  }

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState, 'current', this.state)
    if (prevState.greeting === 'hello') {
      this.setState({
        hi: 'say hi'
      })
    }



  }


  greeting() {
    this.setState({
      greeting: 'Hello World'
    })
  }

  render() {
    console.log('render');
    // this.setState({greeting: ''})
    return (
      <div>
        <div>
          {this.state.greeting}
        </div>
        <button onClick={this.greeting.bind(this)}>Change The car</button>
      </div>
    )
  }
}

export default App;


//------------- example for why binding is loosing when using event handler --------------
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



import React from 'react';
import * as myUtils from './module';

function Welcome(props) {
  myUtils.fn1();
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      {/* <Clock /> */}
      <ParentComp />
    </div>
  );
}


export default App;


//Extracting components
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: new Date()
    }
  }
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.setState({ data: new Date() })
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {

    return (
      <div>
        <span>time is:</span>
        <span>{this.state.data.toLocaleTimeString()}</span>
      </div>
    )
  }
}
///////////////////////////////
class ParentComp extends React.Component {

  state = {
    myState: 4
  }

  componentDidMount() {
    this.setState({
      myState: 3
    })
  }

  render() {
    return (
      <ChildComp prop1={4} />
    )
  }
}

class ChildComp extends React.Component {


  componentDidMount() {
    console.log('child Comp: Did Mount');
  }

  componentDidUpdate(prevProps) {
    console.log('child Comp, in Did update', this.props, prevProps)
  }

  render() {
    return (
      <div>Hay I am Child Comp</div>
    )
  }
}
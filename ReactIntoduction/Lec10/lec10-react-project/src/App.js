import ControlledComp from './ControlledComp';
import React from 'react';
import './style.scss'
import './AsyncStateComp';
// import AsyncStateComp from './AsyncStateComp';
import WillUnmountExample from './WillUnmoutExample';
import Clock from './Clock';
import Form from './Form';
import Communication from './Communication';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showText: false
    }
  }

  showText() {
    this.setState({
      showText: true
    })
  }

  render() {
    return (
      <div className="App">
        <Communication showText={this.showText.bind(this)} />
        {this.state.showText ?
          <div>Hello I am from Parent not Child</div>

          : null}
      </div>

    );
  }

}

export default App;

import React from 'react';

import logo from './logo.svg';
import './App.css';
import Page from './Components/Page';
import { LangContext } from './context'




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      preferedLang: 'Ar'
    }
  }

  changeLang(e) {
    this.setState({
      preferedLang: e.target.value
    })
  }

  render() {
    return (
      <LangContext.Provider value={
        {
          preferedLang: this.state.preferedLang,
          changeLang: this.changeLang.bind(this),
        }
      }
      >
        <div className="App">
          <Page />
        </div>

      </LangContext.Provider>

    );
  }

}

export default App;
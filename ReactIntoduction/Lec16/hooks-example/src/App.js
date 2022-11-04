import React, { useState, useEffect } from 'react';

import './App.css';


let count = 0;

function App() {
  count++;

  const [greetingMsg, setGreetingMsg] = useState({ a: 'hello' });
  const [anotherGreeting, setAnotherGreeting] = useState('')

  useEffect(function () {
    console.log('Component Did Mount function');

  }, [])

  useEffect(() => {
    console.log(greetingMsg)
  }, [greetingMsg])

  useEffect(() => {
    /// any logic related with another greeting msg
  }, [anotherGreeting])

  console.log("Rendering " + count)


  const sayHello = () => {

    // setGreetingMsg({
    //   ...greetingMsg,
    //   b: "world"
    // })

    setGreetingMsg((state) => {
      return { ...state, b: 'world' }
    })
    // console.log(greetingMsg);

  }

  function sayAnotherGreeting() {
    setAnotherGreeting("Hi")

  }


  return (
    <div>
      <button
        onClick={sayHello}
      >Say Hello</button>
      <div>
        {greetingMsg.a}

      </div>
      <div>
        {greetingMsg.b}
      </div>

      <button onClick={sayAnotherGreeting} >another greeting msg</button>
    </div>
  )
}

export default App;

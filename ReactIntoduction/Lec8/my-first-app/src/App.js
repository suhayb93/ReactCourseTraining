import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';





function MyFirstComp(props) {

  // const products = props.products;
  // const greeting = props.greetingMesg;


  // const var1 = <div>I am JSX in variable</div>

  function pureFunction(parm1, parm2) {
    return parm1 + parm2
  }


  return (
    <div>
      {props}
      <Comp1 />
      <Comp2 />
    </div>
  )
}

function App() {
  var x = 4;
  function fn() {
    return x
  }

  return (
    <div>
      <TimeComp />
    </div>
  );
}

export default App;



function TimeComp() {
  return (
    <div>
      <span>Current Time:</span>
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  )
}

// class MyClass {

//   memberVar = 4;

//   method1() {
//     var method2 = () => {

//     }

//     this.memberVar;
//     this.method2();
//   }

//   method2() {

//   }
// }
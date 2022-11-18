import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UnMounrExample from './UnMountExample';

function App() {

  // const [btn, setBtn] = useState('');

  // useEffect(() => {
  //   if (btn === 'button 1') {

  //   } else {

  //   }
  // }, btn)

  // const onbtnClicked = (e) => {
  //   console.log(e.target.textContent)

  // }

  // return (
  //   <div>
  //     <div><button onClick={onbtnClicked}>button 1</button></div>
  //     <div><button onClick={onbtnClicked}>button 2</button></div>
  //   </div>
  // );
  //////////////////////////

  //   const [showNav, setShowNav] = useState(true)

  //   function showHideNavBar() {
  //     setShowNav(!showNav)
  //   }

  //   return (
  //     <div>
  //       {showNav ?
  //         <NavBar />

  //         : null}
  //       <div>
  //         <button onClick={showHideNavBar}>Show/Hide</button>
  //       </div>
  //     </div>
  //   )
  // }


  // const [btnState, setBtnState] = useState('');

  // useEffect(() => {
  //   if (/*some condition */) {
  //     setBtnState(btnState);

  //   }
  //   console.log('btn use effect');


  // }, [btnState]);



  // function onBtnClicked(e) {

  //   setBtnState(e.target.value);
  // }

  // return (
  //   <div>
  //     <div>
  //       <button value="btn1" onClick={onBtnClicked}>button 1</button>
  //     </div>
  //     <div>
  //       <button value="btn2" onClick={onBtnClicked}>button 2</button>
  //     </div>
  //   </div>
  // )

  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])

  // return (
  //   <div>
  //     Time: <span>{time}</span>
  //   </div>
  // )


  return (
    <UnMounrExample />
  )
}
export default App;


// function Form() {
//   // 1. Use the name state variable
//   const [name, setName] = useState('Mary');

//   // 2. Use an effect for persisting the form
//   useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
//   });

//   // 3. Use the surname state variable
//   const [surname, setSurname] = useState('Poppins');

//   // 4. Use an effect for updating the title
//   useEffect(function updateTitle() {
//     document.title = name + ' ' + surname;
//   });

//   // ...
// }


// useState('Mary')           // 1. Initialize the name state variable with 'Mary'
// useEffect(persistForm)     // 2. Add an effect for persisting the form
// useState('Poppins')        // 3. Initialize the surname state variable with 'Poppins'
// useEffect(updateTitle)     // 4. Add an effect for updating the title


// if (name !== '') {
//   useEffect(function persistForm() {
//     localStorage.setItem('formData', name);
//   });
// }

// useState('Mary')           // 1. Read the name state variable (argument is ignored)
// // useEffect(persistForm)  // 🔴 This Hook was skipped!
// useState('Poppins')        // 🔴 2 (but was 3). Fail to read the surname state variable
// useEffect(updateTitle)     // 🔴 3 (but was 4). Fail to replace the effect
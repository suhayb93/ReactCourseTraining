import './App.css';


function MyFirstComp(props) {
  const greetingMesg = props.greetingMesg;
  const products = props.products;
  return (
    <div >
      <ul>
        {
          products.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })
        }


      </ul>
    </div>
  )
}

function App() {

  return (
    <div>
      <MyFirstComp greetingMesg="hi" products={['shirt', 'car', 'ball']} />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {productInfo.map(infoObj => <Product nameAndPriceObject ={infoObj} ></Product>)}
        <p>Changed The Emmet Settings</p>
      </header>
    </div>
  );
}

const productInfo = [{name:'A',price:10},{name:'B',price:20},{name:'C',price:30}]

function ComponentName(passedParameter) {
  const ComponentStyle = {
    border : '2px solid yellow'
  }
  return (
    <div style={ComponentStyle}>
      <p>Hi <strong>{passedParameter.name}</strong></p>
      <p>Bye</p>
    </div>
  );
}

function Product (props) {
  const ProductStyle = {
    border : '4px solid cyan',
    marginTop : '20px',
    padding : '1rem',
    borderRadius : '20px'
  }
  return (
    <div style={ProductStyle}>
      <h3>Name : {props.nameAndPriceObject.name}</h3>
      <p>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti!</p>
      <small>Price : <strong>{props.nameAndPriceObject.price}</strong></small>
      <br/>
      <button>Buy Now</button>
    </div>
  );
}

export default App;

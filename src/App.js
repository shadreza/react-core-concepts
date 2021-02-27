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
        <ComponentName></ComponentName>
        <p>Changed The Emmet Settings</p>
      </header>
    </div>
  );
}

function ComponentName() {
  const ComponentStyle = {
    border : '2px solid yellow'
  }
  return (
    <div style={ComponentStyle}>
      <p>Hi</p>
      <p>Bye</p>
    </div>
  );
}

export default App;

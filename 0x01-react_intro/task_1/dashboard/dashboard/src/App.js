import holbertonLogo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </>
  );
}

export default App;

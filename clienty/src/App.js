import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a href="/auth/google/">
            <code>Sign In With Google </code>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import UsingHooks from "./UsingHook"
import UsingComponents from "./UsingComponent"


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payment Tab</h1>
        <UsingHooks/>
        OR
        <UsingComponents/>
      </header>
    </div>
  );
}

export default App;

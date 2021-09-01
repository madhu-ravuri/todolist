import "./App.css";
import { Router } from "@reach/router";

import Main from "./views/Main";
import List from "./views/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <List path="/list" />
      </Router>
    </div>
  );
}

export default App;

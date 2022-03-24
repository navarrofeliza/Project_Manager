import React from "react";
import Main from "./views/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/product/">
          <Main />
        </Route>
        <Route path="product/:id">
          <Detail />
        </Route>
      </div>
    </BrowserRouter>
  );
}
export default App;

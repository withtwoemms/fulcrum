import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Status from "./components/pages/Status";

function App() {
    const title = 'fulcrum.academy';
    const [windowState, setWindowState] = useState(
      {
        height: window.innerHeight,
        width: window.innerWidth
      }
    );

    useEffect(() => {
      function handleResize() {
        setWindowState(
          {
            height: window.innerHeight,
            width: window.innerWidth
          }
        )
      }
      document.title = title
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => (<Home windowState={windowState} />)} />
          <Route exact path="/status" component={() => (<Status windowState={windowState} />)} />
          <Route exact path="/contact" component={() => (<Contact windowState={windowState} />)} />
          <Route exact path="*" component={() => (<NotFound windowState={windowState} />)} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;

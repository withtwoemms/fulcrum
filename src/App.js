import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";

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
      <Switch>
        <Route exact path="/">
          <Home windowState={windowState} />
        </Route>
      </Switch>
    );
}

export default App;

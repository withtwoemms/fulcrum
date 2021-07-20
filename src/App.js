import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
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
        <Route exact path="/">
          <Home windowState={windowState} />
        </Route>
        <Route exact path="/status">
          <Status windowState={windowState} />
        </Route>
      </BrowserRouter>
    );
}

export default App;

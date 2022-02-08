import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Routes from "./routes/Routes";

function App() {

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | Wadge"
          defaultTitle="Wadge"
        />
          <Routes />
      </HelmetProvider>
    </React.Fragment>
  );
}

export default App;

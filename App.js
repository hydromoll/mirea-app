import React, { useState } from "react";
import Start from "./view-components/startScreenView";
import BottomNavigator from "./navigation-components/bottomNavigator";

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  return showRealApp ? <BottomNavigator /> : <Start chooseGroupEvent={() => setShowRealApp(true)} />;
};

export default App;

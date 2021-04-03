import React, { useState } from "react";
import Start from "./screens/Start";
import BottomNavigator from "./navigation-components/bottomNavigator";

const App = () => {
  const [showRealApp, setShowRealApp] = useState(true);
  return showRealApp ? <BottomNavigator /> : <Start chooseGroupEvent={() => setShowRealApp(true)} />;
};

export default App;

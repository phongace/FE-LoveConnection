import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from 'src/screens/Home';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <StartPage /> */}
      <Home />
    </GestureHandlerRootView>
  );
}

export default App;

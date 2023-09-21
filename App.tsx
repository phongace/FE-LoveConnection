import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StartPage from 'src/screens/StartPage';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StartPage />
      {/* <Home /> */}
    </GestureHandlerRootView>
  );
}

export default App;

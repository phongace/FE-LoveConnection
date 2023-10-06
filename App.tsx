import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationStack from 'src/navigation';
import StartPage from 'src/screens/StartPage';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <NavigationStack /> */}
      <StartPage />
    </GestureHandlerRootView>
  );
};

export default App;

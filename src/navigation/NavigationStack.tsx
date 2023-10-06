import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from 'src/screens/Home';
import StartPage from 'src/screens/StartPage';
import { styles } from './style';

const BottomTab = createBottomTabNavigator();

const NavigationStack = () => (
  <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIconStyle: styles.icon }}
      />
      <BottomTab.Screen name="Start" component={StartPage} />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default NavigationStack;

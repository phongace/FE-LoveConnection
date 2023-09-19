import { StyleSheet, Dimensions } from 'react-native';
import COLOR from 'src/constants/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const BUTTON_HEIGHT = 60;

export const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: BUTTON_HEIGHT,
    width: SCREEN_WIDTH - 40,
    position: 'absolute',
    bottom: 30,
    left: 20,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    backgroundColor: COLOR.primary,
  },
  swipeable: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    left: 5,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextIcon: {
    width: 20,
    height: 20,
  },
  swipeText: {
    color: COLOR.secondary,
    fontSize: 16,
    zIndex: 2,
  },
});

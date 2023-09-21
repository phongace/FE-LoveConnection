import { StyleSheet } from 'react-native';
import COLOR from 'src/constants/colors';

const BUTTON_HEIGHT = 60;

export const styles = StyleSheet.create({
  swipeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: BUTTON_HEIGHT,
    width: '100%',
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
  icon: {
    width: 40,
    height: 40,
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
  swipeText: {
    color: COLOR.secondary,
    fontSize: 16,
    zIndex: 2,
    fontFamily: 'Medium',
  },
});

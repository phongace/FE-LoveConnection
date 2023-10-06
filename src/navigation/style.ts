import { StyleSheet } from 'react-native';
import { BORDER_RADIUS } from 'src/constants';
import COLOR from 'src/constants/colors';

export const styles = StyleSheet.create({
  tabBar: {
    // height: 50,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR.card,
  },
  icon: {
    marginTop: 30,
  },
});

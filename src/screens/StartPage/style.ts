import { StyleSheet } from 'react-native';
import COLOR from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  title: {
    color: COLOR.secondary,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 180,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

import { StyleSheet } from 'react-native';
import COLOR from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLOR.beige,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLOR.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileIcon: {
    width: 18,
    height: 18,
  },
  hiText: {
    fontWeight: '500',
    fontFamily: 'MediumItalic',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Bold',
    letterSpacing: 0.2,
  },
});

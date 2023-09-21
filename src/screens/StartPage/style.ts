import { StyleSheet } from 'react-native';
import COLOR from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  title: {
    color: COLOR.secondary,
    fontSize: 28,
    letterSpacing: 0.2,
    fontFamily: 'Playfair-SemiBold',
  },
  subtitle: {
    width: '90%',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 12,
    color: COLOR.gray,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontFamily: 'Playfair-Medium',
  },
});

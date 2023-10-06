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
    // fontFamily: 'Assistant-Bold',
    fontWeight: '700',
    marginTop: 150,
    textTransform: 'uppercase',
  },
  subtitle: {
    width: '60%',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: COLOR.white,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontFamily: 'Medium',
  },
});

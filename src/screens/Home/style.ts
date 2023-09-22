import { StyleSheet } from 'react-native';
import { BORDER_RADIUS } from 'src/constants';
import COLOR from 'src/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  content: {
    padding: 20,
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hiText: {
    fontFamily: 'Assistant-Regular',
    color: COLOR.white,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.card,
  },
  title: {
    marginTop: 40,
    marginBottom: 25,
    fontSize: 16,
    fontFamily: 'Assistant-Medium',
    letterSpacing: 0.1,
    color: COLOR.white,
  },
  // Card item
  cardItem: {
    backgroundColor: COLOR.card,
    width: 260,
    borderRadius: BORDER_RADIUS,
    paddingTop: 12,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  cardImageContainer: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 30,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Assistant-Medium',
    letterSpacing: 0.1,
    color: COLOR.white,
    marginBottom: 6,
  },
  cardQuestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cardQuestionTitle: {
    color: COLOR.white,
    fontSize: 12,
    fontFamily: 'Assistant-Regular',
  },
  cardButton: {
    padding: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLOR.secondary,
    borderRadius: BORDER_RADIUS,
  },
  cardButtonText: {
    color: COLOR.white,
    fontFamily: 'Assistant-Medium',
  },
});

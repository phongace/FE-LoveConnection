import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { styles } from './style';

const SWIPE_RANGE = Dimensions.get('window').width - 100;

const SwipeButton = () => {
  const X = useSharedValue(0);

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      X.value = e.translationX;
    },

    onEnd: () => {
      if (X.value < SWIPE_RANGE) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(SWIPE_RANGE);
        console.log('action');
      }
    },
  });

  const InterpolateXInput = [0, SWIPE_RANGE];
  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(X.value, InterpolateXInput, [
              0,
              SWIPE_RANGE - 140,
              Number(Extrapolate.CLAMP),
            ]),
          },
        ],
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: 60 + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
  };

  return (
    <View style={styles.swipeContainer}>
      <Animated.View style={[styles.colorWave, AnimatedStyles.colorWave]} />
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
          <Image
            source={require('src/assets/icons/next.png')}
            style={styles.nextIcon}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Let's start
      </Animated.Text>
    </View>
  );
};

export default SwipeButton;

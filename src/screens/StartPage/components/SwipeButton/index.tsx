import React from 'react';
import { Dimensions, View } from 'react-native';
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
    heartStyles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE },
          {
            translateY: interpolate(X.value, InterpolateXInput, [0, -20]),
          },
        ],
      };
    }),
    heart2Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 40 },
          {
            translateY: interpolate(X.value + 100, InterpolateXInput, [-20, 0]),
          },
        ],
      };
    }),
    heart3Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 80 },
          {
            translateY: interpolate(X.value, InterpolateXInput, [0, -80]),
          },
        ],
      };
    }),
    heart4Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 120 },
          {
            translateY: interpolate(
              X.value - 140,
              InterpolateXInput,
              [-120, -40],
            ),
          },
        ],
      };
    }),
    heart5Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 160 },
          {
            translateY: interpolate(X.value, InterpolateXInput, [-100, -176]),
          },
        ],
      };
    }),
    heart6Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 200 },
          {
            translateY: interpolate(
              X.value - 200,
              InterpolateXInput,
              [-200, -140],
            ),
          },
        ],
      };
    }),
    heart7Styles: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: SWIPE_RANGE - 240 },
          {
            translateY: interpolate(X.value, InterpolateXInput, [-200, -260]),
          },
        ],
      };
    }),
  };

  return (
    <View style={styles.swipeContainer}>
      <Animated.View style={[styles.colorWave, AnimatedStyles.colorWave]}>
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heartStyles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart2Styles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart3Styles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart4Styles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart5Styles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart6Styles]}
        />
        <Animated.Image
          source={require('src/assets/images/hearts.png')}
          style={[styles.icon, AnimatedStyles.heart7Styles]}
        />
      </Animated.View>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.Image
          source={require('src/assets/images/button-heart.png')}
          style={[styles.swipeable, AnimatedStyles.swipeable]}
        />
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Vuốt để bắt đầu
      </Animated.Text>
    </View>
  );
};

export default SwipeButton;

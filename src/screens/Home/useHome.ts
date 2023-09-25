import { useRef, useState, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';

const useHome = () => {
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;

  const [index, setIndex] = useState(0);
  const setActiveIndex = useCallback(
    (activeIndex: any) => {
      scrollXIndex.setValue(activeIndex);
      setIndex(activeIndex);
    },
    [scrollXIndex],
  );

  const handleSession = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'buổi sáng';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'buổi chiều';
    } else {
      return 'buổi tối';
    }
  };

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return {
    handleSession,
    scrollXAnimated,
    index,
    setActiveIndex,
  };
};

export default useHome;

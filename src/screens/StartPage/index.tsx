import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import SwipeButton from './components/SwipeButton';
import { styles } from './style';

const StartPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background-start.png')}
        resizeMode="cover"
        style={styles.container}>
        <Text style={styles.title}>Kết nối trái tim qua những câu hỏi</Text>
        <SwipeButton />
      </ImageBackground>
    </View>
  );
};

export default StartPage;

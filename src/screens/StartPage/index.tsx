import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './style';

const StartPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/Welcome.png')}
        resizeMode="cover"
        style={styles.container}>
        <Text>abc</Text>
      </ImageBackground>
    </View>
  );
};

export default StartPage;

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
        style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 90,
              fontWeight: '900',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}>
            Love
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontWeight: '900',
              textTransform: 'uppercase',
              marginTop: -10,
              letterSpacing: 2.8,
              color: '#FFFFFF',
            }}>
            Connection
          </Text>
          <Text style={styles.title}>Kết nối sâu hơn</Text>
          <Text style={styles.subtitle}>
            Cùng ngồi xuống và tìm hiểu đối phương với kho tàng câu hỏi của
            chúng tôi nhé
          </Text>
        </View>
        <SwipeButton />
      </ImageBackground>
    </View>
  );
};

export default StartPage;

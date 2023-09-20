import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import ProfileIcon from 'src/assets/icons/profile.svg';
import { styles } from './style';
import useHome from './useHome';

const Home = () => {
  const { handleSession } = useHome();

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.hiText}>{`Chào ${handleSession()}`}</Text>
      <TouchableHighlight style={styles.iconContainer}>
        <ProfileIcon style={styles.profileIcon} />
      </TouchableHighlight>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background-home.png')}
        style={{ flex: 1 }}>
        <View style={styles.content}>
          {renderHeader()}
          <Text style={styles.title}>Chủ đề</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

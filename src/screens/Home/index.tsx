import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import UserIcon from 'src/assets/icons/user.svg';
import CardItem from './components/CardItem';
import { styles } from './style';
import useHome from './useHome';

const Home = () => {
  const { handleSession } = useHome();

  const renderHeader = () => (
    <View style={styles.flexCenter}>
      <Text style={styles.hiText}>{`Chào ${handleSession()}`}</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
        <UserIcon />
      </TouchableOpacity>
    </View>
  );

  const renderCardItems = () => (
    <>
      <CardItem
        title="Tình yêu"
        totalQuestions="100"
        imageUrl={require('src/assets/images/love-home.png')}
      />
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderHeader()}
        <Text style={styles.title}>Chủ đề</Text>
        {renderCardItems()}
      </View>
    </SafeAreaView>
  );
};

export default Home;

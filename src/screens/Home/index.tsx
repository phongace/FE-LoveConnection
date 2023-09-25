import React, { useEffect } from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import UserIcon from 'src/assets/icons/user.svg';
import CardItem from './components/CardItem';
import { styles } from './style';
import useHome from './useHome';

const TOPICS = [
  {
    title: 'Tình yêu',
    total: '100',
    url: require('src/assets/images/love-home.png'),
  },
  {
    title: 'Gia đình',
    total: '99',
    url: require('src/assets/images/family-home.png'),
  },
  {
    title: 'Bạn bè',
    total: '98',
    url: require('src/assets/images/friends-home.png'),
  },
  {
    title: 'Đồng nghiệp',
    total: '97',
    url: require('src/assets/images/colleague-home.png'),
  },
];
const VISIBLE_ITEMS = 3;

const Home = () => {
  const { handleSession, scrollXAnimated, index, setActiveIndex } = useHome();

  const renderHeader = () => (
    <View style={styles.flexCenter}>
      <Text style={styles.hiText}>{`Chào ${handleSession()}`}</Text>
      <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
        <UserIcon />
      </TouchableOpacity>
    </View>
  );

  const renderCardItems = () => (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === TOPICS.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <FlatList
          data={TOPICS}
          keyExtractor={(_, index) => String(index)}
          horizontal
          inverted
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
            height: 320,
          }}
          scrollEnabled={false}
          removeClippedSubviews={false}
          CellRendererComponent={({
            item,
            index,
            children,
            style,
            ...props
          }) => {
            const newStyle = [style, { zIndex: TOPICS.length - index }];
            return (
              <View style={newStyle} {...props}>
                {children}
              </View>
            );
          }}
          renderItem={({ item, index }) => {
            const { title, total, url } = item;
            const inputRange = [index - 1, index, index + 1];
            const translateX = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [50, 0, -100],
            });
            const scale = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8, 1, 1.3],
            });
            const opacity = scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  position: 'absolute',
                  left: -140,
                  opacity,
                  transform: [
                    {
                      translateX,
                    },
                    { scale },
                  ],
                }}>
                <CardItem title={title} totalQuestions={total} imageUrl={url} />
              </Animated.View>
            );
          }}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
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

import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from 'react-native';
import QuestionIcon from 'src/assets/icons/question.svg';
import { styles } from '../style';

type Props = {
  title: string;
  totalQuestions: string;
  imageUrl: ImageSourcePropType;
};

const CardItem = ({ title, totalQuestions, imageUrl }: Props) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.cardImageContainer}>
        <Image source={imageUrl} style={styles.cardImage} />
      </View>
      <View style={styles.flexCenter}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.cardQuestionContainer}>
            <QuestionIcon width={12} height={12} />
            <Text
              style={
                styles.cardQuestionTitle
              }>{`${totalQuestions} câu hỏi`}</Text>
          </View>
        </View>
        <Pressable style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Xem Tất Cả</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardItem;

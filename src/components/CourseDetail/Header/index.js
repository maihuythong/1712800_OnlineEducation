import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../../shared/image';
import BigBadge from '../../BigBadge';
import LargeButton from '../../LargeButton';
import MediumButton from '../../MediumButton';
import styles from './styles';
import CustomRatingBar from '../../../shared/CustomRatingBar';

const Header = (props) => {
  const {
    title,
    author,
    level,
    publishDate,
    duration,
    vote,
    voteCount,
    description,
    addToBookmark,
  } = props;

  const [isFull, setIsFull] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.author}>
        <FlatList
          horizontal
          data={author}
          renderItem={({ item }) => (
            <BigBadge image={item.avatar} content={item.name} />
          )}
        />
      </View>
      <View style={styles.courseInfo}>
        <Text style={styles.textNormalColor}>
          {level} • {publishDate} • {duration}
        </Text>
        <View style={styles.vote}>
          <CustomRatingBar star={vote} />
          <Text style={styles.textNormalColor}>({voteCount})</Text>
        </View>
      </View>
      <View style={styles.operation}>
        <MediumButton
          text={'Bookmark'}
          uri={images.bookmark.uri}
          action={addToBookmark}
        />
        <MediumButton text={'Add to Channel'} uri={images.addtochannel.uri} />
        <MediumButton text={'Download'} uri={images.download.uri} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.textDescription}>
          {isFull ? (
            <Text numberOfLines={5} style={styles.description}>
              {description}
            </Text>
          ) : (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsFull(!isFull)}
        >
          {isFull ? (
            <Text style={styles.toggleIcon}>&#8897;</Text>
          ) : (
            <Text style={styles.toggleIcon}>&#8896;</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <LargeButton
          uri={images.takealearn.uri}
          text={'Take a learning check'}
        />
        <LargeButton
          uri={images.viewmore.uri}
          text={'View related paths & courses'}
        />
      </View>
    </View>
  );
};

export default Header;

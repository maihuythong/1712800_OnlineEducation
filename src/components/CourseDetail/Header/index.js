import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BigBadge from '../../BigBadge';
import styles from './styles';
import Content from '../Content';
import LargeButton from '../../LargeButton';
import { images } from '../../../shared/image';
import MediumButton from '../../MediumButton';

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
  } = props;

  const [isShowFull, setIsShowFull] = useState(true);

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
          <Text style={styles.textNormalColor}>{vote}</Text>
          <Text style={styles.textNormalColor}>({voteCount})</Text>
        </View>
      </View>
      <View style={styles.operation}>
        <MediumButton text={'Bookmark'} uri={images.bookmark.uri} />
        <MediumButton text={'Add to Channel'} uri={images.addtochannel.uri} />
        <MediumButton text={'Download'} uri={images.download.uri} />
      </View>
      {isShowFull ? (
        <View style={styles.description}>
          <Text style={[styles.textDescription, styles.textNormalColor]}>
            {description}
          </Text>
          <TouchableOpacity
            style={styles.showMoreDescription}
            onPress={() => setIsShowFull(!isShowFull)}
          >
            <Text style={styles.showMoreText}> {'<'}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.description, styles.textNormalColor]}>
          <Text
            numberOfLines={3}
            style={[styles.textDescription, styles.textNormalColor]}
          >
            {description}
          </Text>
          <TouchableOpacity
            style={styles.showMoreDescription}
            onPress={() => setIsShowFull(!isShowFull)}
          >
            <Text style={styles.showMoreText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      )}
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

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-elements';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import course from '../../../json/home.json';
import LargeCardCourse from '../../../components/LargeCardCourse';

const AuthorDetail = (props) => {
  const { image, name, description } = props.route.params;
  const [isFull, setIsFull] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.info}>
        <Avatar size={60} source={{ uri: image }} rounded />
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.follow}>FOLLOW</Text>
      </TouchableOpacity>
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
      <View>
        <Text style={styles.course}>Courses</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={course}
          renderItem={({ item }) => (
            <LargeCardCourse
              key={item.id}
              id={item.id}
              image={item.image}
              coursename={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              duration={item.duration}
              vote={item.vote}
              voteCount={item.voteCount}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default AuthorDetail;

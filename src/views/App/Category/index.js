import React from 'react';
import { View } from 'react-native';
import course from '../../../json/home.json';
import { FlatList } from 'react-native-gesture-handler';
import LargeCardCourse from '../../../components/LargeCardCourse';

const Category = (props) => {
  const { navigation } = props;

  return (
    <View>
      <FlatList
        data={course}
        showsVerticalScrollIndicator={false}
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
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Category;

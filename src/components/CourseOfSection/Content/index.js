import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import homejson from '../../../json/home.json';
import LargeCardCourse from '../../LargeCardCourse';

const Content = () => {
  return (
    <View>
      <FlatList
        data={homejson}
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
  );
};

export default Content;

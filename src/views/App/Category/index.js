import React, { useContext } from 'react';
import { View } from 'react-native';
// import course from '../../../json/home.json';
import { FlatList } from 'react-native-gesture-handler';
import LargeCardCourse from '../../../components/LargeCardCourse';
import { OfflineDataContext } from '../../../provider/offlinedata-provider';

const Category = (props) => {
  const { navigation } = props;
  const context = useContext(OfflineDataContext);

  return (
    <View>
      <FlatList
        data={context.bookmark}
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

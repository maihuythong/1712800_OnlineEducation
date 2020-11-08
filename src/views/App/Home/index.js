import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import homejson from '../../../json/home.json';
import Card from '../../../components/Card';

const Home = () => {
  return (
    <ScrollView>
      {/* <Selection>
            
        </Selection>  */}
      <FlatList
        horizontal
        data={homejson}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            author={item.author}
            level={item.level}
            publishDate={item.publishDate}
            vote={item.vote}
          />
        )}
      />
      <Text />
    </ScrollView>
  );
};

export default Home;

import React from 'react';
import { View, FlatList } from 'react-native';
import LargeImageButton from '../../../components/Browse/LargeImageButton';
import { images } from '../../../shared/image';
import styles from './styles';
import SmallImageButton from '../../../components/Browse/SmallImageButton';
import browsejson from '../../../json/browse.json';
import Section from '../../../components/Section';
import PathCard from '../../../components/PathCard';
import mypathjson from '../../../json/mypaths.json';
import { ScrollView } from 'react-native-gesture-handler';

const Browse = () => {
  // console.log(browsejson);

  return (
    <ScrollView style={styles.container}>
      <LargeImageButton
        text={`NEW \n RELEASES`}
        image={images.newrelease.uri}
      />
      <LargeImageButton
        text={`RECOMENDED \n FOR YOU`}
        image={images.recommended.uri}
      />
      {/* <SmallImageButton text={`CONFERENCES`} image={images.conference.uri} /> */}
      <View style={styles.smallImage}>
        <FlatList
          // contentContainerStyle={{ alignSelf: 'flex-start' }}
          // numColumns={browsejson.length / 2}
          // showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
          data={browsejson}
          renderItem={({ item }) => {
            <SmallImageButton
              key={item.id}
              id={item.id}
              text={item.text}
              image={images.conference.uri}
            />;
          }}
        />
      </View>
      <View>
        <Section title='Paths'>
          <FlatList
            horizontal
            data={mypathjson}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <PathCard
                key={item.id}
                id={item.id}
                image={item.image}
                pathName={item.pathName}
                courseCount={item.courseCount}
              />
            )}
          />
        </Section>
      </View>
    </ScrollView>
  );
};

export default Browse;

import React from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Section from '../../../components/Section';
import interestsjson from '../../../json/interests.json';
import SkillBadge from '../../../components/Browse/SkillBadge';
import styles from './styles';
import TextInformation from '../../../components/Profile/TextInfomation';

const Profile = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.info}>
        <Avatar
          size={72}
          rounded
          source={{
            uri:
              'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
          }}
        />
        <Text style={styles.username}>{'Mai Huy Thong'}</Text>
      </View>
      <View style={styles.interest}>
        <Section title='Interests' hideSeeall={true}>
          <FlatList
            horizontal
            data={interestsjson}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <SkillBadge
                key={item.id}
                id={item.id}
                image={item.image}
                content={item.title}
              />
            )}
          />
        </Section>
      </View>
      <View style={styles.textInfo}>
        <TextInformation content={'Activity insights (last 30 days)'} />
        <TextInformation
          title={'TOTAL ACTIVE DAYS)'}
          content={'1'}
          note={'1 day streak'}
        />
        <TextInformation
          title={'MOST ACTIVE TIME OF DAY'}
          content={'10:00 PM'}
        />
        <TextInformation title={'MOST VIEWED SUBJECT'} content={'N/A'} />
      </View>
    </ScrollView>
  );
};

export default Profile;

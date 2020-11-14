import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/CourseOfSection/Header';
import Content from '../../../components/CourseOfSection/Content';
import styles from './styles';

const CourseOfSection = (props) => {
  const { title } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header
          title={title}
          img={
            'https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w660/Uploaded/2020/bnx_mjxuh/2019_07_18/san_ho_la_thuc_vat_hay_dong_vat.jpg'
          }
        />
      </View>
      <ScrollView style={styles.content}>
        <Content />
      </ScrollView>
    </View>
  );
};

export default CourseOfSection;

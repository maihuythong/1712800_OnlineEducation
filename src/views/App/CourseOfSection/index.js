import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/CourseOfSection/Header';
import Content from '../../../components/CourseOfSection/Content';

const CourseOfSection = () => {
  return (
    <ScrollView>
      <Header
        title={'Software development'}
        img={
          'https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w660/Uploaded/2020/bnx_mjxuh/2019_07_18/san_ho_la_thuc_vat_hay_dong_vat.jpg'
        }
      />
      <Content />
    </ScrollView>
  );
};

export default CourseOfSection;

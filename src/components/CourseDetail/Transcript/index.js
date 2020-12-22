import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Transcript = () => {
  // const { transcript } = props;
  const transcript = "";
  // let transcript = "Hi, everyone. My name is Bryan Hansen, and welcome to my course, Spring MVC Fundamentals. I'm the director of software development at Software Technology Group and the CEO of Complete Programmer. Spring MVC is a full‑featured yet lightweight Java framework that has taken the web development space by storm. Spring's integration is excellent with just about any other Java tooling, and Spring MVC is no exception. In this course we're going to cover the fundamentals of Spring MVC. We will cover all the major parts of Spring MVC, including container and containerless deployments, both standard controllers and REST controllers, JSP pages and the Spring alternative, Thymeleaf, as well as consuming Spring MVC from client‑side JavaScript. By the end of this course, you should feel comfortable developing with Spring MVC. Before beginning the course, you should be familiar with Java, and although not necessary, some Maven experience will help. From here, you should feel comfortable diving into Spring with courses on Spring security, Spring data JPA using Hibernate, or having a better understanding of architectural design through the design patterns in Java courses here on Pluralsight. I hope you'll join me on this journey to learn Spring MVC with the Spring MVC Fundamentals Course, here at Pluralsight.";
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder='Search Transcript' />
        <Text style={styles.text}>{transcript}</Text>
      </View>
    </View>
  );
};

export default Transcript;

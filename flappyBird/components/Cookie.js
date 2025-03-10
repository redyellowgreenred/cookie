import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageComponent from './Images.js'; // 确保路径正确


const CookieSection = ({ title }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.row}>
        <View style={styles.iconBox} />
        <Text style={styles.sectionTitle}>{title}</Text>
        <ImageComponent style={styles.sectionImage} />
      </View>
      <View style={styles.row}>
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 7,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderRadius: 20,
    borderWidth: 3,
    paddingVertical: 18,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#000000",
    borderDash: [10, 10],
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    marginHorizontal: 21,
  },
  iconBox: {
    width: 28,
    height: 23,
  },
  photoBox: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    marginRight: 11,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 17,
  },
  sectionImage: {
    width: 28,
    height: 23,
  },
});

export default CookieSection;
import React from "react";
import { View, StyleSheet } from "react-native";

const CookiePiece = ({source}) => {
  return <View style={styles.photoBox} />;
};

const styles = StyleSheet.create({
  photoBox: {
    width: 120,
    height: 120,
    backgroundColor: "#D9D9D9",
    marginRight: 11,
  },
});

export default CookiePiece;

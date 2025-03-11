import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageComponent from './components/Images.js'; // 确保路径正确
import CookieSection from './components/Cookie.js'; // 确保路径正确

const App = () => {
  const [sections, setSections] = useState([
    { title: "重要照片" },
    { title: "生活日记" }
  ]);

  const addCookieSection = () => {
    setSections([...sections, { title: "新饼干" }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 顶部图案 */}
        <View style={styles.topPattern} />

        {/* 奈雪雪的记忆饼干 */}
        <View style={styles.contentRow}>
          <ImageComponent style={styles.icon} />
          <Text style={styles.textContent}>          奈雪雪的记忆饼干     </Text>
          <TouchableOpacity onPress={addCookieSection}>
            <ImageComponent style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* 动态渲染 CookieSection */}
        {sections.map((section, index) => (
          <CookieSection key={index} title={section.title} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 8,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 25,
    marginBottom: 20,
  },
  topPattern: {
    width: 124,
    height: 36,
    backgroundColor: "#000000",
    borderRadius: 98,
    alignSelf: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 26,
    height: 19,
  },
  textContent: {
    color: "#000000",
    fontSize: 17,
    marginLeft: 10,
  },
});

export default App;
import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CookieSection from './components/Cookie.js'; // 确保路径正确
import Sidebar from './components/Sidebar.js';
import AllCookieButton from './components/AllCookieButton.js';

const App = () => {
  const sectionRefs = useRef([]); // 用于存储多个 CookieSection 的引用
  const [sections, setSections] = useState([
    { title: "重要照片" },
    { title: "生活日记" }
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const addCookieSection = () => {
    setSections([...sections, { title: "新饼干" }]);
  };

  // 收集所有 CookieSection 的 addCookie 方法
  const addCookieCallbacks = sections.map((section, index) => ({
    title: section.title,
    onPress: () => {
      if (sectionRefs.current[index]) {
        sectionRefs.current[index].addCookie(); // 调用对应 CookieSection 的 addCookie 方法
      }
    },
    color: 'black', // 按钮颜色
  }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPattern} />
      <Sidebar isOpen={isSidebarOpen} toggleState={toggleSidebar} />
      <ScrollView style={styles.scrollView}>
        {/* 奈雪雪的记忆饼干 */}
        <View style={styles.contentRow}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>☰</Text> {/* 使用汉堡图标表示按钮 */}
          </TouchableOpacity>
          <Text style={styles.textContent}>奈雪雪的记忆饼干</Text>
          <TouchableOpacity onPress={addCookieSection} style={styles.addCookieButton}>
            <View style={styles.iconButton} /> {/* 替换为圆形按钮 */}
          </TouchableOpacity>
        </View>

        {/* 动态渲染 CookieSection */}
        {sections.map((section, index) => (
          <CookieSection
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)} // 保存每个 CookieSection 的引用
            title={section.title}
          />
        ))}
      </ScrollView>
      <AllCookieButton buttons={addCookieCallbacks} />
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
    justifyContent: "space-between",
    paddingVertical: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  topPattern: {
    width: 124,
    height: 36,
    backgroundColor: "#000000",
    borderRadius: 98,
    alignSelf: 'center',
    marginBottom: 10,
  },
  iconButton: {
    width: 26,
    height: 26,
    borderRadius: 13, // 半径为宽度的一半，使其成为圆形
    backgroundColor: 'black',
  },
  textContent: {
    color: "#000000",
    fontSize: 17,
    marginLeft: 5,
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addCookieButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated } from 'react-native';
import CookiePiece from './CookiePiece.js'; // 确保路径正确

const EditableTitle = ({ title, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleSave = () => {
    onSave(editedTitle.trim() || title); // 处理空输入和纯空格
    setIsEditing(false);
  };

  return isEditing ? (
    <TextInput
      value={editedTitle}
      onChangeText={setEditedTitle}
      onSubmitEditing={handleSave}
      onBlur={handleSave}
      autoFocus
      /* 其他样式属性保持不变 */
    />
  ) : (
    <TouchableOpacity onPress={() => setIsEditing(true)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const CookieSection = ({ title }) => {
  const [cookies, setCookies] = useState([]);

  const addCookie = () => {
    setCookies([...cookies, null]);
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.row}>
        <View style={styles.iconBox} />
        <EditableTitle title={title} onSave={(newTitle) => console.log(newTitle)} />
        <TouchableOpacity onPress={addCookie} style={styles.addCookieButton}>
          <View style={styles.cameraIcon} /> {/* 替换为相机形状 */}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={true}>
        <View style={styles.row}>
          {cookies.map((cookie, index) => (
            <CookiePiece key={index} source={cookie} />
          ))}
        </View>
      </ScrollView>
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
  sectionTitle: {
    color: "#000000",
    fontSize: 17,
  },
  sectionImage: {
    width: 28,
    height: 23,
  },
  addCookieButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 28,
    height: 23,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
});

export default CookieSection;
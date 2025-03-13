import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Modal, Text, Button, ScrollView } from 'react-native';

const AllCookieButton = ({ buttons }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // 控制模态框的显示状态

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      {/* 右下角的固定按钮 */}
      <TouchableOpacity onPress={toggleModal} style={styles.addCookieButton}>
        <View style={styles.cameraIcon} /> {/* 替换为相机形状 */}
      </TouchableOpacity>

      {/* 模态弹窗 */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {/* 动态渲染按钮列表 */}
            {buttons.map((button, index) => (
              <Button
                key={index} // 每个按钮的唯一标识
                title={button.title} // 按钮标题
                onPress={() => {
                  button.onPress(); // 调用对应的 addCookie 方法
                  toggleModal(); // 关闭模态框
                }}
                color={button.color || 'black'} // 按钮颜色，默认为黑色
              />
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  addCookieButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cameraIcon: {
    width: 28,
    height: 23,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default AllCookieButton;
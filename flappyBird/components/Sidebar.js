import React, { useState, useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window'); // 获取屏幕宽度

const Sidebar = ({ isOpen, toggleState }) => {
  const sidebarAnimation = useRef(new Animated.Value(-300)).current;

  React.useEffect(() => {
    Animated.spring(sidebarAnimation, {
      toValue: isOpen ? 0 : -screenWidth,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          width: screenWidth,
          transform: [{ translateX: sidebarAnimation }]
        }
      ]}
    >
      <View style={styles.sidebarHeader}>
        <Text style={styles.sidebarHeaderText}>侧边栏</Text>
        <TouchableOpacity onPress={toggleState} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>关闭</Text>
        </TouchableOpacity>
      </View>

      {/* 替换为新的内容 */}
      <View style={styles.sidebarContent}>
        <View style={styles.itemRow}>
          <View style={styles.icon} />
          <Text style={styles.itemText}>奈雪雪不是茶</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>记录时间</Text>
          <Text style={styles.itemText}>10天</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>记录大小</Text>
          <Text style={styles.itemText}>1G</Text>
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>主题色彩</Text>
          <View style={[styles.colorIcon, { backgroundColor: '#FF5733' }]} />
          <View style={[styles.colorIcon, { backgroundColor: '#33FF57' }]} />
          <View style={[styles.colorIcon, { backgroundColor: '#3357FF' }]} />
          <View style={[styles.colorIcon, { backgroundColor: '#FFFF33' }]} />
        </View>
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>日夜模式</Text>
          <Text style={styles.itemText}>跟随系统</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  sidebarHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
  },
  sidebarContent: {
    padding: 15,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 15,
    marginRight: 10,
  },
  colorIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    flex: 1,
  },
});

export default Sidebar;
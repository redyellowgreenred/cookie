import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const addTaskHandler = () => {
    onAddTask(enteredTask); // 调用父组件传递的 onAddTask 函数
    setEnteredTask(''); // 清空输入框
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task"
        style={styles.input}
        value={enteredTask}
        onChangeText={setEnteredTask}
      />
      <Button title="Add Task" onPress={addTaskHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '70%', // 输入框占据 70% 的宽度
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
});

export default TaskInput;
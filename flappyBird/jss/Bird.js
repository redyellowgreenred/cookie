import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, StyleSheet } from 'react-native';

const Bird = ({ canvasWidth, canvasHeight }) => {
  const birdPosition = useRef(new Animated.ValueXY({ x: canvasWidth / 4, y: canvasHeight / 2 })).current;

  useEffect(() => {
    const gravity = Animated.timing(birdPosition.y, {
      toValue: canvasHeight,
      duration: 3000,
      useNativeDriver: false,
    });

    gravity.start();

    return () => {
      gravity.stop(); // 清理动画
    };
  }, [canvasHeight]);

  const jump = () => {

    birdPosition.y.setValue(birdPosition.y._value - 100);

    const gravity = Animated.timing(birdPosition.y, {
          toValue: canvasHeight,
          duration: 2000,
          useNativeDriver: false,
        });

      gravity.start();
  };

  return (
    <TouchableOpacity onPress={jump} style={styles.touchable}>
      <Animated.View
        style={[
          styles.bird,
          {
            transform: [
              { translateX: birdPosition.x },
              { translateY: birdPosition.y },
            ],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bird: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    position: 'absolute',
  },
  touchable: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Bird;
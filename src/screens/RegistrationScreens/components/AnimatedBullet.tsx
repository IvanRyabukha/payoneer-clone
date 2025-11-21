import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  index: number;
  current: number;
}

const AnimatedBullet = ({ index, current }: Props) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  useEffect(() => {
    const isActive = index < current;

    progress.value = withTiming(isActive ? 1 : 0, {
      duration: 200,
    });
  }, [current]);

  return (
    <View style={styles.bullet}>
      <Animated.View style={[styles.fill, animatedStyle]} />
    </View>
  );
};

export default AnimatedBullet;

const styles = StyleSheet.create({
  bullet: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginRight: 5,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: '#6272ff',
    height: '100%',
    borderRadius: 4,
  },
});

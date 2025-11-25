import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface Props {
  isActive: boolean;
  onPress: () => void;
}

const ThemeSwitcher = ({ isActive, onPress }: Props) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(isActive ? 22 : 0, {
          mass: 1,
          damping: 20,
          stiffness: 250,
        }),
      },
    ],
  }));

  const interpolateBackgroudColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      isActive ? 22 : 0,
      [0, 22],
      ['#e3e3e3', '#00ff00'],
    );

    return { backgroundColor };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        needsOffscreenAlphaCompositing
        style={[styles.container, interpolateBackgroudColor]}
      >
        <Animated.View style={[styles.circle, animatedStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default ThemeSwitcher;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    justifyContent: 'center',
    width: 50,
    height: 28,
    padding: 2,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 5,
  },
});

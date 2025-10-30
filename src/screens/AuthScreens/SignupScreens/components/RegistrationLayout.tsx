import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Header from './Header';
import ProgressBar from './ProgressBar';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface RegistrationLayoutProps {
  step: number;
  total: number;
  children: React.ReactNode;
}

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({
  step,
  total,
  children,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(80);

  useFocusEffect(
    useCallback(() => {
      opacity.value = 0;
      translateY.value = 80;

      opacity.value = withTiming(1, {
        duration: 700,
        easing: Easing.out(Easing.quad),
      });

      translateY.value = withTiming(0, {
        duration: 700,
        easing: Easing.out(Easing.quad),
      });

      return () => {
        opacity.value = withTiming(0, { duration: 400 });
      };
    }, [step]),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Header title={'Registration'} />
      <ProgressBar total={total} current={step} />

      <Animated.View style={[styles.content, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default RegistrationLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

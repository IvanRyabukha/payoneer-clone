import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';
import {
  ThumbsUp,
  Star,
  Trophy,
  FileCheck2,
  AppWindowMac,
  Check,
} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = () => {
  const { theme } = useTheme();

  const mainScale = useSharedValue(0);
  const mainRotate = useSharedValue(0);
  const iconScales = [
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
  ];

  useEffect(() => {
    mainScale.value = withSequence(
      withTiming(0.2, { duration: 200 }),
      withSpring(1, { damping: 10, stiffness: 100 }),
    );
    mainRotate.value = withTiming(360, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    iconScales.forEach((v, i) => {
      v.value = withDelay(
        300 + i * 100,
        withSpring(1, { damping: 9, stiffness: 90 }),
      );
    });
  }, []);

  const mainStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: mainScale.value },
      { rotate: `${mainRotate.value}deg` },
    ],
  }));

  const getIconStyle = (i: number) =>
    useAnimatedStyle(() => ({
      transform: [{ scale: iconScales[i].value }],
      opacity: iconScales[i].value,
    }));

  return (
    <View style={styles.imgContainer}>
      <Animated.View style={[styles.image, mainStyle]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={
            theme.dark
              ? ['#6E5DFF', '#9C76FF', '#3B7BFF']
              : ['#E9DDFF', '#DAD3FF', '#A8C4FF']
          }
          style={styles.linearGradient}
        >
          <Animated.View
            style={[
              styles.icon,
              {
                top: -16,
                left: 50,
                backgroundColor: theme.dark ? '#2A2A2A' : '#fff',
              },
              getIconStyle(0),
            ]}
          >
            <ThumbsUp
              size={20}
              strokeWidth={1.5}
              color={theme.dark ? '#9C76FF' : '#000'}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.icon,
              {
                top: 15,
                left: 0,
                backgroundColor: theme.dark ? '#2A2A2A' : '#fff',
              },
              getIconStyle(1),
            ]}
          >
            <Star
              size={16}
              strokeWidth={1.5}
              color={theme.dark ? '#9C76FF' : '#000'}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.icon,
              {
                top: 70,
                left: -14,
                backgroundColor: theme.dark ? '#2A2A2A' : '#fff',
              },
              getIconStyle(2),
            ]}
          >
            <Trophy
              size={20}
              strokeWidth={1.5}
              color={theme.dark ? '#9C76FF' : '#000'}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.icon,
              {
                top: 0,
                left: 105,
                backgroundColor: theme.dark ? '#2A2A2A' : '#fff',
              },
              getIconStyle(3),
            ]}
          >
            <FileCheck2
              size={14}
              strokeWidth={1.5}
              color={theme.dark ? '#9C76FF' : '#000'}
            />
          </Animated.View>

          <View style={styles.mainImg}>
            <AppWindowMac
              size={100}
              strokeWidth={0.8}
              color={theme.dark ? '#fff' : '#000'}
            />
          </View>

          <View style={styles.iconCheck}>
            <Check size={40} strokeWidth={1.2} color={'#6E5DFF'} />
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default AnimatedImage;

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    opacity: 0.9,
  },
  mainImg: {
    position: 'absolute',
  },
  iconCheck: {
    position: 'absolute',
  },
  icon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 5,
  },
});

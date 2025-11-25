import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import type { LucideIcon } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@/api/store/theme/ThemeContext';

type Props = {
  icon: LucideIcon;
  selected: boolean;
  colors: string[];
  size?: number;
  strokeWidth?: number;
};

const AnimatedGradientIcon: React.FC<Props> = ({
  icon: Icon,
  selected,
  colors,
  size = 25,
  strokeWidth = 1.5,
}) => {
  const { theme } = useTheme();

  const opacity = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    opacity.value = withTiming(selected ? 1 : 0, {
      duration: 200,
    });
  }, [selected]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.center}>
        <Icon size={size} color={theme.colors.text} strokeWidth={strokeWidth} />
      </View>

      <Animated.View
        style={[styles.overlay, { width: size, height: size }, animatedStyle]}
      >
        <MaskedView
          style={{ flex: 1 }}
          maskElement={
            <View style={styles.center}>
              <Icon size={size} color={'#000'} strokeWidth={strokeWidth} />
            </View>
          }
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={colors}
            style={{ flex: 1 }}
            locations={[0, 0.5, 1]}
          />
        </MaskedView>
      </Animated.View>
    </View>
  );
};

export default AnimatedGradientIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

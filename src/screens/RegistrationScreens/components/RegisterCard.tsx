import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import AnimatedGradientIcon from './AnimatedGradientIcon';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  withSpring,
} from 'react-native-reanimated';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@/api/store/theme/ThemeContext';

type Props = {
  title?: string;
  description: string;
  icon: LucideIcon;
  additionalInfoIcon?: LucideIcon;
  selected: boolean;
  isCheckBox?: boolean;
  onPress: () => void;
  onAdditionalInfo?: () => void;
};

const RegisterCard: React.FC<Props> = ({
  title,
  description,
  icon: Icon,
  selected,
  isCheckBox,
  additionalInfoIcon: IconAdd,
  onPress,
  onAdditionalInfo,
}) => {
  const { theme } = useTheme();
  const progress = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(selected ? 1 : 0, {
      duration: 250,
    });
  }, [selected]);

  const animationStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      ['transparent', '#b278fd'],
    );

    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [theme.dark ? '#2A2A2A' : '#ffffff', theme.dark ? '#3a3a3a' : '#fefaff'],
    );

    return {
      borderColor,
      backgroundColor,
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[styles.cardWrapper, animationStyle]}>
        <AnimatedGradientIcon icon={Icon} selected={selected} size={25} />

        <View style={styles.cardInfo}>
          {title && (
            <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
              {title}
            </Text>
          )}
          <Text style={[styles.cardDesc, { color: theme.colors.text }]}>
            {description}
          </Text>
        </View>
        {IconAdd && (
          <Pressable onPress={onAdditionalInfo} style={{ marginLeft: 15 }}>
            <IconAdd size={20} color={theme.colors.text} />
          </Pressable>
        )}
        {isCheckBox && (
          <Checkbox
            status={selected ? 'checked' : 'unchecked'}
            color={selected ? '#b278fd' : ''}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 10,
    padding: 15,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardInfo: {
    flex: 1,
    flexShrink: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  cardDesc: {
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 0.8,
  },
});

import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import AnimatedGradientIcon from './AnimatedGradientIcon';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { Checkbox } from 'react-native-paper';

type Props = {
  title?: string;
  description: string;
  icon: LucideIcon;
  additionalInfoIcon?: LucideIcon;
  selected: boolean;
  isCheckBox?: boolean;
  onPress: () => void;
  setAdditionalInfo?: () => void;
};

const RegisterCard: React.FC<Props> = ({
  title,
  description,
  icon: Icon,
  selected,
  isCheckBox,
  additionalInfoIcon: IconAdd,
  onPress,
  setAdditionalInfo,
}) => {
  const progress = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(selected ? 1 : 0, {
      duration: 300,
    });
  }, [selected]);

  const animationStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      ['transparent', '#5b04cc'],
    );

    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#fff', '#fefaff'],
    );

    return {
      borderColor,
      backgroundColor,
    };
  });

  return (
    <Pressable onPress={onPress} style={{ marginTop: 15 }}>
      <Animated.View style={[styles.cardWrapper, animationStyle]}>
        <AnimatedGradientIcon icon={Icon} selected={selected} size={25} />

        <View style={styles.cardInfo}>
          {title && <Text style={styles.cardTitle}>{title}</Text>}
          <Text style={styles.cardDesc}>{description}</Text>
        </View>
        {IconAdd && (
          <Pressable onPress={setAdditionalInfo} style={{ marginLeft: 15 }}>
            <IconAdd size={20} />
          </Pressable>
        )}
        {isCheckBox && (
          <Checkbox
            status={selected ? 'checked' : 'unchecked'}
            color={selected ? '#5b04cc' : ''}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#fff',
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

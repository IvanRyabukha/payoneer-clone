import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { X } from 'lucide-react-native';
import Animated, {
  ZoomIn,
  ZoomOut,
  LinearTransition,
} from 'react-native-reanimated';
import { useTheme } from '@/api/store/theme/ThemeContext';

interface Props {
  name: string;
  onDeleted: () => void;
}

const ChipsListItem = ({ name, onDeleted }: Props) => {
  const { theme } = useTheme();
  return (
    <Animated.View
      entering={ZoomIn.springify().damping(100)}
      exiting={ZoomOut.duration(100)}
      layout={LinearTransition.springify()}
      style={[styles.chipWrapper]}
    >
      <Pressable
        style={[
          styles.chip,
          {
            backgroundColor: theme.dark
              ? theme.colors.inputBackground
              : '#ebebeb',
          },
        ]}
        onPress={onDeleted}
      >
        <Text style={[styles.chipText, { color: theme.colors.text }]}>
          {name}
        </Text>
        <View
          style={[styles.chipClose, { backgroundColor: theme.colors.text }]}
        >
          <X size={12} color={theme.dark ? '#000' : '#fff'} strokeWidth={3} />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default ChipsListItem;

const styles = StyleSheet.create({
  chipWrapper: {
    marginRight: 10,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8,
    letterSpacing: 0.8,
  },
  chipClose: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    height: 16,
    width: 16,
  },
});

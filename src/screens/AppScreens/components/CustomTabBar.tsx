import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet } from 'react-native';

export default function CustomTabBar(props: BottomTabBarProps) {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[
          '#FFCB47',
          '#FF7F51',
          '#FF4D5D',
          '#B14EFF',
          '#4E9BFF',
          '#4EFFB8',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientTop}
      />
      <BottomTabBar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  gradientTop: {
    height: 0.7,
    width: '100%',
  },
});

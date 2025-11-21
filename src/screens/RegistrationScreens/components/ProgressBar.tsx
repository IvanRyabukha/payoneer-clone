import { StyleSheet, View } from 'react-native';
import React from 'react';
import AnimatedBullet from './AnimatedBullet';

type Props = {
  total: number;
  current: number;
};

const ProgressBar: React.FC<Props> = ({ total, current }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <AnimatedBullet key={i} index={i} current={current} />
      ))}
    </View>
  )
}

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 4,
  },
  bullet: {
    flex: 1,
    borderRadius: 4,
    marginRight: 5,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB'
  }
})
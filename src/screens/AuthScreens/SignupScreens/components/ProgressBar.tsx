import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  total: number;
  current: number;
};

const ProgressBar: React.FC<Props> = ({ total, current }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View style={[styles.bullet, i < current ? styles.active : styles.inactive]} key={i} />
      ))}
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 4,
    marginHorizontal: 15,
    marginVertical: 10,
    marginBottom: 20,
    gap: 5,
  },
  bullet: {
    flex: 1,
    borderRadius: 4,
  },
  active: {
    backgroundColor: '#4355ff'
  },
  inactive: {
    backgroundColor: '#E5E7EB'
  }
})
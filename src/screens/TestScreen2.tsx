import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetFlashList, BottomSheetFlatList } from '@gorhom/bottom-sheet';

const TestScreen2 = () => {
 
  return (
    <View style={styles.container}>

    </View>
  );
};

export default TestScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const TestScreen = () => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleCollapsePress = () => bottomSheetRef.current?.collapse();
  const snapToIndex = (index: number) =>
    bottomSheetRef.current?.snapToIndex(index);

  const renderBackdrop = useCallback((props: any) => {
    return (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={handleOpenPress} />
      <Button title="Close" onPress={handleClosePress} />
      <Button title="Collapse" onPress={handleCollapsePress} />

      <Button title="Snap To 0" onPress={() => snapToIndex(0)} />
      <Button title="Snap To 1" onPress={() => snapToIndex(1)} />
      <Button title="Snap To 2" onPress={() => snapToIndex(2)} />
      <Button title="Snap To 3" onPress={() => snapToIndex(3)} />

      <BottomSheet
        ref={bottomSheetRef}
        enableDynamicSizing
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: '#fff' }}
        handleIndicatorStyle={{ backgroundColor: 'lightgray', width: 70 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
});

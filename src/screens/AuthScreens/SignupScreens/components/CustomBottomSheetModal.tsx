import { StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

interface Props {
  title: string;
  additionalInfo: string[] | null;
}

type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
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
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      enableDynamicSizing
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: '#fff' }}
      handleIndicatorStyle={{ backgroundColor: 'lightgray', width: 60 }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.containerHeadline}>{props.title}</Text>
        {props.additionalInfo?.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.dot} />
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
  containerHeadline: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
  item: {
    marginBottom: 15,
    flexDirection: 'row',
    position: 'relative'
  },
  text: {
    marginLeft: 20,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: '50%',
    position: 'absolute',
    top: 8
  }
});

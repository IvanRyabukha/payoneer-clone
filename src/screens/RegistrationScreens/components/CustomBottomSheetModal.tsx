import { StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@/api/store/theme/ThemeContext';

interface Props {
  title: string;
  additionalInfo: string[] | null;
}

type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref, Props>((props, ref) => {
  const { theme } = useTheme();

  const renderBackdrop = useCallback((props: any) => {
    return (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      />
    );
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      enableDynamicSizing
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: theme.colors.inputBackground}}
      handleIndicatorStyle={{
        backgroundColor: theme.dark ? theme.colors.text : 'lightgray',
        width: 70,
      }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text
          style={[
            styles.containerHeadline,
            { color: theme.colors.text },
          ]}
        >
          {props.title}
        </Text>
        {props.additionalInfo?.map((item, index) => (
          <View key={index} style={styles.item}>
            <View
              style={[styles.dot, { backgroundColor: theme.colors.text }]}
            />
            <Text style={[styles.text, { color: theme.colors.text }]}>
              {item}
            </Text>
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
    position: 'relative',
  },
  text: {
    marginLeft: 20,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    position: 'absolute',
    top: 8,
  },
});

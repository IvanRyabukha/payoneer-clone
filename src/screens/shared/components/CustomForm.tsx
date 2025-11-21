import { StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

const CustomForm = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.form}>
      {children}
    </View>
  );
};

export default CustomForm;

const styles = StyleSheet.create({
  form: {
    gap: 20,
    marginTop: 20,
  },
});

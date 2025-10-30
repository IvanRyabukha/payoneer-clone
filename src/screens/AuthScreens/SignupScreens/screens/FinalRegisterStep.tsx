import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

const FinalRegisterStep = () => {

  const handleSignup = () => {
    console.log('Registration successes');
  };

  return (
    <View style={styles.container}>
      <Text>FinalRegisterStep</Text>
      <Button title="Sing Up" onPress={handleSignup} />
    </View>
  );
};

export default FinalRegisterStep;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

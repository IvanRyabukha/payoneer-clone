import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'SetUp'>;
};

const SetUp: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SetUp</Text>
      <Button
        title="Let`s go!"
        onPress={() => navigation.navigate('FinalRegisterStep')}
      />
    </View>
  );
};

export default SetUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

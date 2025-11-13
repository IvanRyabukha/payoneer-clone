import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { useTheme } from '@/api/store/theme/ThemeContext';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'FinalRegisterStep'>;
};

const FinalRegisterStep = ({ navigation }: Props) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Final Register Step</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUpForm')}>
        <Text style={[styles.text]}>Go to sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('WebViewScreen', { url: 'https://github.com/IvanRyabukha' })}
      >
        <Text style={styles.text}>Go to deep linking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinalRegisterStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  btn: {
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#cc66ff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CustomForm from '../../shared/components/CustomForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EmailInput from '../../shared/components/EmailInput';
import PasswordInput from '../../shared/components/PasswordInput';
import CustomButton from '@/screens/shared/components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { useTheme } from '@/api/store/theme/ThemeContext';
import FirstNameInput from '../../shared/components/FirstNameInput';
import LastNameInput from '../../shared/components/LastNameInput';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'SignUpForm'>;
};

const SignUpForm = ({ navigation }: Props) => {
  const { theme } = useTheme();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Please fill in the fields in English characters only
        </Text>
        <View style={{ flex: 1 }}>
          <CustomForm>
            <FirstNameInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <LastNameInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
            <EmailInput
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <PasswordInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
          </CustomForm>
        </View>
        <View style={styles.footer}>
          <CustomButton
            label="Register"
            colors={['#a059fd', '#6E5DFF', '#045DDA']}
            handlePress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  footer: {
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#75767f',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingRight: 40,
  },
});

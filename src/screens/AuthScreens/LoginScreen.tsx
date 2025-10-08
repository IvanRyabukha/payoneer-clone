import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Animated,
  Pressable,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../../../assets/img/logo.svg';
import CustomInput from '../../components/CustomInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigation';
import CustomButton from '../../components/CustomButton';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

/*
  1. Create animation for input placeholder + styles for validation input
*/

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -20,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [fadeAnim, moveAnim]);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.loginTop}>
          <Logo width={90} height={35} />
          <TouchableOpacity
            style={{ flexDirection: 'row', gap: 5 }}
            onPress={() => navigation.navigate('Language')}
          >
            <Text>Flag</Text>
            <Text>EN</Text>
          </TouchableOpacity>
        </View>

        <Animated.Text
          style={[
            styles.loginTitle,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: moveAnim.interpolate({
                    inputRange: [-40, 0],
                    outputRange: [-10, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.loginTitle}>Sign in</Text>
        </Animated.Text>

        <Animated.View
          style={{
            transform: [{ translateY: moveAnim }],
            width: '100%',
          }}
        >
          <View style={styles.inputContainer}>
            <CustomInput
              placeholder="Email or username"
              value={email}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              onChangeText={setEmail}
            />

            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotPassLink}
            onPress={() => navigation.navigate('TestScreens')}
          >
            <Text style={styles.forgotPassLinkText}>Forgot password?</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.flexSpacer} />

        <View style={styles.footer}>
          <CustomButton />

          <Animated.View style={[styles.registerContainer, { opacity: fadeAnim }]}>
            <Text style={styles.registerText}>New to Payoneer?</Text>
            <Pressable onPress={() => navigation.navigate('TestScreens')}>
              <Text style={styles.registerLink}>Register</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  loginTop: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    gap: 20,
    marginTop: 20,
  },
  forgotPassLink: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  forgotPassLinkText: {
    fontSize: 13,
    color: '#056eed',
    textDecorationLine: 'underline',
  },
  flexSpacer: {
    flex: 1,
  },
  footer: {
    gap: 10,
    marginBottom: 10,
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#056eed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  registerText: {
    fontSize: 15,
    textAlign: 'center',
  },
  registerLink: {
    color: '#056eed',
    textDecorationLine: 'underline',
  },
});

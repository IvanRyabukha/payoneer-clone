import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  Animated,
  Pressable,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../../../../assets/img/logo.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthNavigation';
import { useLanguage } from '@/api/store/locale/LanguageContext';
import EmailInput from '@/screens/AuthScreens/shared/components/EmailInput';
import PasswordInput from '@/screens/AuthScreens/shared/components/PasswordInput';
import CustomForm from '@/screens/AuthScreens/shared/components/CustomForm';
import CustomButton from '@/screens/shared/components/CustomButton';


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
  const { language, flags } = useLanguage();
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
            style={styles.langBtn}
            onPress={() => navigation.navigate('Language')}
          >
            <Image source={flags[language.code]} style={styles.flag} />
            <Text style={styles.langCode}>{language.code}</Text>
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
          <CustomForm>
            <EmailInput
              placeholder="Email or username"
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

          <TouchableOpacity
            style={styles.forgotPassLink}
            onPress={() => navigation.navigate('TestScreens')}
          >
            <Text style={styles.forgotPassLinkText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.forgotPassLink}
            onPress={() => navigation.navigate('TestScreens2')}
          >
            <Text style={styles.forgotPassLinkText}>TestScreen2</Text>
          </TouchableOpacity> */}
        </Animated.View>

        <View style={styles.flexSpacer} />

        <View style={styles.footer}>
          <CustomButton
            label="Sign in"
            colors={['#a059fd', '#6E5DFF', '#045DDA']}
            handlePress={() => {}}
          />
          <Animated.View
            style={[styles.registerContainer, { opacity: fadeAnim }]}
          >
            <Text style={styles.registerText}>New to Payoneer?</Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
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
    backgroundColor: '#fff',
  },
  loginTop: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langBtn: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#75767f',
  },
  langCode: {
    fontSize: 14,
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 18,
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

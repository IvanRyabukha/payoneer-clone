import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegistrationHiddenStackParamList } from '@/screens/RegistrationHiddenScreens/RegistrationHiddenStack';
import CustomButton from '@/screens/shared/components/CustomButton';
import { useTheme } from '@/api/store/theme/ThemeContext';
import AnimatedImage from './components/AnimatedImage';


type Props = {
  navigation: NativeStackNavigationProp<RegistrationHiddenStackParamList, 'SetUp'>;
};

const SetUp: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={{ flex: 1 }}>
        <AnimatedImage />

        <View style={styles.descrContainer}>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            Great!
            {'\n'}
            Now, let`s get you set up with Payoneer.
          </Text>

          <Text style={[styles.description, { color: theme.colors.text }]}>
            In the next 4 steps, we`ll gather more detailed information about
            you and your business
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <CustomButton
          label="Let`s go!"
          colors={['#a059fd', '#6E5DFF', '#045DDA']}
          handlePress={() => navigation.navigate('FinalRegisterStep')}
        />
      </View>
    </View>
  );
};

export default SetUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descrContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.9,
  },
  footer: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
});

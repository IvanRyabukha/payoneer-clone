import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RegistrationStackParamList } from '@/navigation/RegistrationStack';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack';

import {
  type RegisterData,
  BUSINESS_DESCRIBE_DATA,
} from '../data/register.data';

import { useTheme } from '@/api/store/theme/ThemeContext';

import ErrorBox from '../components/ErrorBox';
import RegisterCardList from '../components/RegisterCardList';
import { useScreenError } from '@/screens/shared/hooks/useScreenError';
import CustomButton from '@/screens/shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<
    RegistrationFlowStackParamList,
    'BusinessDescribe'
  >;
};

const BusinessDescribe: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  const [selected, setSelected] = useState<RegisterData | null>(null);
  const [error, setError] = useScreenError('');

  const handleNext = () => {
    if (!selected) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('HowToUse');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <RegisterCardList
        title="How would you describe your bussiness?"
        data={BUSINESS_DESCRIBE_DATA}
        selected={selected}
        onSelect={setSelected}
      />

      <View style={styles.footer}>
        <CustomButton
          label={'Next'}
          colors={['#a059fd', '#6E5DFF', '#045DDA']}
          handlePress={handleNext}
        />
      </View>
      <ErrorBox error={error} />
    </View>
  );
};

export default BusinessDescribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

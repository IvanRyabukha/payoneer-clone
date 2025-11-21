import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { RegistrationStackParamList } from '@/navigation/RegistrationStack';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack';

import { RECEIVE_MONEY_DATA, RegisterData } from '../data/register.data';

import { useTheme } from '@/api/store/theme/ThemeContext';
import ErrorBox from '../components/ErrorBox';
import RegisterCardList from '../components/RegisterCardList';
import { useScreenError } from '@/screens/shared/hooks/useScreenError';
import CustomButton from '@/screens/shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<RegistrationFlowStackParamList, 'ReceiveMoney'>;
};

const ReceiveMoney: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  const [selectedOptions, setSelectedOptions] = useState<RegisterData[]>([]);
  const [error, setError] = useScreenError('');

  const handleNext = () => {
    if (selectedOptions.length === 0) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('Marketplaces');
  };

  const toggleOption = (option: RegisterData) => {
    setSelectedOptions(prev =>
      prev.find(item => item.id === option.id)
        ? prev.filter(item => item.id !== option.id)
        : [...prev, option],
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <RegisterCardList
        title="Where will the money you receive to Payoneer come from?"
        subTitle="Select all that apply."
        data={RECEIVE_MONEY_DATA}
        selected={selectedOptions}
        isCheckBox
        onSelect={toggleOption}
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

export default ReceiveMoney;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

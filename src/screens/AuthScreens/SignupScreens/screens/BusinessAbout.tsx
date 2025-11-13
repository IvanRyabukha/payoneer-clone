import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { SignupStackParamList } from '../SignupScreen';
import { type RegisterData, BUSINESS_ABOUT_DATA } from '../data/register.data';

import CustomButton from '../../../shared/components/CustomButton';
import RegisterCardList from '../components/RegisterCardList';
import ErrorBox from '../components/ErrorBox';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'BusinessAbout'>;
};

const BusinessAbout: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  const [selected, setSelected] = useState<RegisterData | null>(null);
  const [error, setError] = useScreenError('');

  const handleNext = () => {
    if (!selected) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('Located');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <RegisterCardList
        title="Let`s get started! First, tell us a little about your business."
        data={BUSINESS_ABOUT_DATA}
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

export default BusinessAbout;

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

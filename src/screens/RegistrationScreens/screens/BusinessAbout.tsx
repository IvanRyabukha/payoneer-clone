import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@/api/store/theme/ThemeContext';
// import { RegistrationStackParamList } from '@/navigation/RegistrationStack';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack';
import { type RegisterData, BUSINESS_ABOUT_DATA } from '../data/register.data';

import RegisterCardList from '../components/RegisterCardList';
import ErrorBox from '../components/ErrorBox';
import CustomButton from '@/screens/shared/components/CustomButton';
import { useScreenError } from '@/screens/shared/hooks/useScreenError';

type Props = {
  navigation: NativeStackNavigationProp<RegistrationFlowStackParamList, 'BusinessAbout'>;
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

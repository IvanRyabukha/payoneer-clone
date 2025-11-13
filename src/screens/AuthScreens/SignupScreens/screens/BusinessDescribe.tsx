import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import {
  type RegisterData,
  BUSINESS_DESCRIBE_DATA,
} from '../data/register.data';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { useTheme } from '@/api/store/theme/ThemeContext';
import CustomButton from '../../../shared/components/CustomButton';
import ErrorBox from '../components/ErrorBox';
import RegisterCardList from '../components/RegisterCardList';

type Props = {
  navigation: NativeStackNavigationProp<
    SignupStackParamList,
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

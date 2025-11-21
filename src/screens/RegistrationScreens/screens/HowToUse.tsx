import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { RegistrationStackParamList } from '@/navigation/RegistrationStack';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack';

import { type RegisterData, HOW_TO_USE_DATA } from '../data/register.data';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../components/CustomBottomSheetModal';

import ErrorBox from '../components/ErrorBox';
import RegisterCardList from '../components/RegisterCardList';
import { useScreenError } from '@/screens/shared/hooks/useScreenError';
import CustomButton from '@/screens/shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<RegistrationFlowStackParamList, 'HowToUse'>;
};

const HowToUse: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  const [selected, setSelected] = useState<RegisterData | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<Array<string> | null>(
    null,
  );
  const [error, setError] = useScreenError('');

  const bottomSheetModal = useRef<BottomSheetModal>(null);

  const openMoadal = (additionalInfo: string[]) => {
    setAdditionalInfo(additionalInfo);
    bottomSheetModal.current?.present();
  };

  const handleNext = () => {
    if (!selected) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('ReceiveMoney');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <RegisterCardList
        title='How would you like to use Payoneer?'
        data={HOW_TO_USE_DATA}
        selected={selected}
        onSelect={setSelected}
        onAdditionalInfo={openMoadal}
      />
      <View style={styles.footer}>
        <CustomButton
          label={'Next'}
          colors={['#a059fd', '#6E5DFF', '#045DDA']}
          handlePress={handleNext}
        />
      </View>

      <ErrorBox error={error} />

      <CustomBottomSheetModal
        ref={bottomSheetModal}
        title={'All account features'}
        additionalInfo={additionalInfo}
      />
    </View>
  );
};

export default HowToUse;

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

import { StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { type RegisterData, HOW_TO_USE_DATA } from '../data/register.data';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../components/CustomBottomSheetModal';
import CustomButton from '../../../shared/components/CustomButton';
import ErrorBox from '../components/ErrorBox';
import RegisterCardList from '../components/RegisterCardList';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'HowToUse'>;
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

// <Text style={styles.title}>How would you like to use Payoneer?</Text>
// {HOW_TO_USE_DATA.map(item => (
//   <RegisterCard
//     key={item.id}
//     title={item.title}
//     description={item.description}
//     icon={item.icon}
//     additionalInfoIcon={item.additionalInfoIcon}
//     setAdditionalInfo={() =>
//       openMoadal(item.additionalInfoDescription ?? [])
//     }
//     selected={selected?.id === item.id}
//     onPress={() => setSelected(item)}
//   />
// ))}

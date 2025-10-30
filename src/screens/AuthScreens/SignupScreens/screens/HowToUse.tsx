import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import RegisterCard from '../components/RegisterCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { type RegisterData, howToUseData } from '../data/registerData';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { TriangleAlert } from 'lucide-react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../components/CustomBottomSheetModal';
import CustomButton from '../../../shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'HowToUse'>;
};

const HowToUse: React.FC<Props> = ({ navigation }) => {
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
    <View style={styles.container}>
      <ScrollView style={{ height: '100%', backgroundColor: 'red' }}>
        <Text style={styles.title}>How would you like to use Payoneer?</Text>
        {howToUseData.map(item => (
          <RegisterCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            additionalInfoIcon={item.additionalInfoIcon}
            setAdditionalInfo={() =>
              openMoadal(item.additionalInfoDescription ?? [])
            }
            selected={selected?.id === item.id}
            onPress={() => setSelected(item)}
          />
        ))}
      </ScrollView>

      {/* <View style={styles.cardContainer}>
        <RegisterCard
          title={'To get paid, send payments, and more'}
          description={'Get our full range of global payment services'}
          icon={HandCoins}
          selected={selected === 'get'}
          onPress={() => setSelected('get')}
        />
        <RegisterCard
          title={'To send payments only'}
          description={'Pay via card, bank transfer, and more'}
          icon={Banknote}
          selected={selected === 'send'}
          onPress={() => setSelected('send')}
        />
      </View> */}

      {/* <View style={styles.flexSpacer} /> */}

      <View style={styles.footer}>
        <CustomButton label={'Next'} colors={['#a059fd', '#6E5DFF', '#045DDA']} handlePress={handleNext} />
      </View>

      {error && (
        <View style={[styles.errorBox]}>
          <TriangleAlert color={'red'} size={25} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

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
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.9,
  },
  cardContainer: {
    paddingTop: 15,
    gap: 15,
  },
  flexSpacer: {
    flex: 1,
    backgroundColor: 'red',
  },
  footer: {
    paddingVertical: 10,
  },
  errorBox: {
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    width: '100%',
  },
  errorText: {
    color: '#4A3428',
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
});

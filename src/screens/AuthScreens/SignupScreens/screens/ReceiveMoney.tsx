import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RegisterCard from '../components/RegisterCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { receiveMoneyData } from '../data/registerData';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { TriangleAlert } from 'lucide-react-native';
import CustomButton from '../../../shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'ReceiveMoney'>;
};

const ReceiveMoney: React.FC<Props> = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(
    new Set(),
  );
  const [error, setError] = useScreenError('');

  const handleNext = () => {
    if (!selectedOptions.size) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('Marketplaces');
  };

  const toggleOption = (id: number) => {
    setSelectedOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      return newSet;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Where will the money you receive to Payoneer come from?
      </Text>
      <Text style={styles.subTitle}>Select all that apply.</Text>
      {receiveMoneyData.map(item => (
        <RegisterCard
          key={item.id}
          description={item.description}
          icon={item.icon}
          selected={selectedOptions.has(item.id)}
          isCheckBox={true}
          onPress={() => toggleOption(item.id)}
        />
      ))}

      <View style={styles.flexSpacer} />

      {error && (
        <View style={[styles.errorBox]}>
          <TriangleAlert color={'red'} size={25} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <CustomButton label={'Next'} colors={['#a059fd', '#6E5DFF', '#045DDA']} handlePress={handleNext} />
      </View>
    </View>
  );
};

export default ReceiveMoney;

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
  subTitle: {
    paddingTop: 5,
    letterSpacing: 0.5,
  },
  cardContainer: {
    paddingTop: 15,
    gap: 15,
  },
  flexSpacer: {
    flex: 1,
  },
  footer: {
    paddingVertical: 15,
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
});

import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RegisterCard from '../components/RegisterCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import { type RegisterData, businessAboutData } from '../data/registerData';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { TriangleAlert } from 'lucide-react-native';
import CustomButton from '../../../shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'BusinessAbout'>;
};

const BusinessAbout: React.FC<Props> = ({ navigation }) => {
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
    <View style={styles.container}>
      <Text style={styles.title}>
        Let's get started! First, tell us a little about your business.
      </Text>
      {businessAboutData.map(item => (
        <RegisterCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          selected={selected?.id === item.id}
          onPress={() => setSelected(item)}
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

export default BusinessAbout;

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
});

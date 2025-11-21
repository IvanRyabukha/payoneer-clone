import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { RegisterData } from '../data/register.data';
import RegisterCard from './RegisterCard';
import { useTheme } from '@/api/store/theme/ThemeContext';

interface Props {
  title: string;
  subTitle?: string;
  data: RegisterData[];
  selected: RegisterData | RegisterData[] | null;
  isCheckBox?: boolean;
  onSelect: (item: RegisterData) => void;
  onAdditionalInfo?: (additionalInfo: string[]) => void;
}

const RegisterCardList = ({
  title,
  subTitle,
  data,
  selected,
  isCheckBox,
  onSelect,
  onAdditionalInfo,
}: Props) => {
  const { theme } = useTheme();
  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <RegisterCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          additionalInfoIcon={item.additionalInfoIcon}
          isCheckBox={isCheckBox}
          selected={
            Array.isArray(selected)
              ? selected.some(sel => sel.id === item.id)
              : selected?.id === item.id
          }
          onPress={() => onSelect(item)}
          onAdditionalInfo={() =>
            onAdditionalInfo?.(item.additionalInfoDescription ?? [])
          }
        />
      )}
      ListHeaderComponent={
        <>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            {title}
          </Text>
          {subTitle && (
            <Text style={[styles.subTitle, { color: theme.colors.text }]}>
              {subTitle}
            </Text>
          )}
        </>
      }
      showsVerticalScrollIndicator={false}
      overScrollMode="always"
      contentContainerStyle={{
        gap: 15,
        paddingHorizontal: 15,
      }}
    />
  );
};

export default RegisterCardList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.9,
    marginBottom: 5,
    marginTop: 15,
  },
  subTitle: {
    paddingTop: 5,
    letterSpacing: 0.5,
  },
});

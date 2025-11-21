import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { TriangleAlert } from 'lucide-react-native';

interface Props {
  error: string;
}

const ErrorBox = ({ error }: Props) => {
  const { theme } = useTheme();

  if (!error) {
    return null;
  }

  return (
    <View
      style={[
        styles.errorBox,
        {
          backgroundColor: theme.dark
            ? theme.colors.inputBackground
            : '#FFE5E5',
        },
      ]}
    >
      <TriangleAlert color={'red'} size={22} />
      <Text
        style={[
          styles.errorText,
          { color: theme.dark ? '#f58181' : '#4A3428' },
        ]}
      >
        {error}
      </Text>
    </View>
  );
};

export default ErrorBox;

const styles = StyleSheet.create({
  errorBox: {
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 15,
    bottom: 80,
  },
  errorText: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
});

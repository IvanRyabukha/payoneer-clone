import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ChevronLeft } from 'lucide-react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import ProgressBar from './ProgressBar';
import { NavigationHelpers } from '@react-navigation/native';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack'

type Props = {
  title: string;
  step: number;
  nav: NavigationHelpers<RegistrationFlowStackParamList, {}>;
};

const Header: React.FC<Props> = ({ title, step, nav }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
      <View style={styles.headerTop}>
        <Pressable style={styles.btnBack} onPress={() => nav.goBack()}>
          <ChevronLeft
            size={30}
            color={theme.colors.text}
            strokeWidth={1.5}
            style={styles.iconBack}
          />
        </Pressable>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>
      </View>
      <ProgressBar total={5} current={step} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 15,
  },
  btnBack: {
    zIndex: 10,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconBack: {
    left: -7,
  },
});

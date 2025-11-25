import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UserRound, Bell } from 'lucide-react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import Logo from '../../../../../../assets/img/logo.svg';

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.logoBtn,
          pressed && {
            opacity: 0.7,
          },
        ]}
        onPress={() => {}}
      >
        <Logo width={25} height={25} />
        <Text style={[styles.userName, { color: theme.colors.text }]}>User Name</Text>
      </Pressable>

      <View style={styles.actions}>
        <Pressable
          style={({ pressed }) => [
            pressed && {
              opacity: 0.7,
            },
          ]}
          onPress={() => {}}
        >
          <UserRound color={ theme.colors.text } size={25}/>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            pressed && {
              opacity: 0.7,
            },
          ]}
          onPress={() => {}}
        >
          <Bell color={ theme.colors.text } size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderColor: 'red',
    borderWidth: 1,
  },
  logoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700'
  },
});

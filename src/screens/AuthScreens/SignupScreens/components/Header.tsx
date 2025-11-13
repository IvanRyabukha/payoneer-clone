import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SignupStackParamList } from '../SignupScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation<NativeStackNavigationProp<SignupStackParamList>>();

  return (
    <View style={[styles.header]}>
      <View style={styles.headerTop}>
        <Pressable style={styles.backBtn} onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}>
          <Ionicons name="chevron-back-outline" size={26} />
        </Pressable>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  backBtn: {
    zIndex: 10,
  },
  headerTitle: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    right: 0,
    fontSize: 16,
    fontWeight: '400',
    zIndex: 1,
  },
});

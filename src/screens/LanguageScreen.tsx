import {
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  Pressable,
  FlatList
} from 'react-native';
import React, { useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthNavigation';
import SearchInput from '../components/SearchInput';
import CountryItem from '../components/CountryItem';
import EmptyCountryList from '../components/EmptyCountryList';
import { useLanguage } from '../context/LanguageContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type LanguageScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Language'
>;

interface LanguageScreenProps {
  navigation: LanguageScreenNavigationProp;
}

const LanguageScreen: React.FC<LanguageScreenProps> = ({ navigation }) => {
  const { language, setLanguage, countries, flags } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const shadowAnim = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;

    Animated.timing(shadowAnim, {
      toValue: y > 5 ? 1 : 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const filtered = countries.filter(
    item =>
      item.code !== language.code &&
      item.code.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.header,
          {
            shadowOpacity: shadowAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.2],
            }),
            elevation: shadowAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 6],
            }),
          },
        ]}
      >
        <View style={styles.headerTop}>
          <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={26} />
          </Pressable>
          <Text style={styles.headerTitle}>Language</Text>
        </View>
        <SearchInput
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </Animated.View>

      {filtered.length === 0 ? (
        <EmptyCountryList isLanguage/>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.code}
          renderItem={({ item }) => (
            <CountryItem
              language={item.label}
              flag={flags[item.code]}
              isSelected={language.code === item.code}
              onSelected={() => {
                setLanguage(item);
                navigation.goBack();
              }}
            />
          )}
          ListHeaderComponent={
            <View style={styles.selected}>
              {!searchQuery && (
                <>
                  <Text style={styles.sectionTitle}>Selected</Text>
                  <CountryItem
                    language={language.label}
                    flag={flags[language.code]}
                    isSelected
                  />

                  <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
                    Supported
                  </Text>
                </>
              )}
            </View>
          }
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 15,
            paddingBottom: 50,
          }}
        />
      )}
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  header: {
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    zIndex: 10,
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
    fontSize: 18,
    fontWeight: '400',
    zIndex: 1,
  },
  selected: {
    paddingTop: 10,
    gap: 5,
  },
  sectionTitle: {
    color: '#5a5a5a',
  },
});

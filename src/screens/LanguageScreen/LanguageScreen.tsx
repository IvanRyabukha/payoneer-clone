import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';
import { useLocale } from '../../api/store/locale/LocaleContext';
import { useTheme } from '@/api/store/theme/ThemeContext';
import LanguageList from './components/LanguageList';
import Header from './components/Header';

export type LanguageScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Language'
>;

interface LanguageScreenProps {
  navigation: LanguageScreenNavigationProp;
}

const LanguageScreen: React.FC<LanguageScreenProps> = ({ navigation }) => {
  const { languages } = useLocale();
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');

  const filtered = languages.filter(item =>
    item.code.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header
        searchQuery={searchQuery}
        onChangeText={setSearchQuery}
        onNavigate={() => navigation.goBack()}
      />
      <LanguageList
        filtered={filtered}
        searchQuery={searchQuery}
        onNavigate={() => navigation.goBack()}
      />
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

{
  /* <Animated.View
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
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <View style={[styles.headerTop]}>
          <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={26}
              color={theme.colors.text}
            />
          </Pressable>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
            Language
          </Text>
        </View>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      </Animated.View> */
}

{
  /* <ListOfCountries filtered={filtered} searchQuery={searchQuery} navigation={navigation} handleScroll={handleScroll}/> */
}

{
  /* {filtered.length === 0 ? (
        <EmptyCountryList isLanguage />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.code}
          overScrollMode="always"
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
            backgroundColor: theme.colors.background,
            paddingHorizontal: 15,
            paddingBottom: 50,
            flex: 1,
          }}
        />
      )} */
}

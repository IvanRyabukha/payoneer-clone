import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { LanguageProvider } from './src/api/store/locale/LanguageContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <LanguageProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </LanguageProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;

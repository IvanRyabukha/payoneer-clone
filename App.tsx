import '@react-native-firebase/app';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { LocaleProvider } from './src/api/store/locale/LocaleContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux';
import { store } from '@/api/store/store';
import { ThemeProvider } from '@/api/store/theme/ThemeContext';

import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyAzN93q2miKez3lxqYnRTPlVcBkAXetuQk", { language: "en" });

function App() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <ThemeProvider>
          <LocaleProvider>
            <Provider store={store}>
              <NavigationContainer>
                <RootNavigation />
              </NavigationContainer>
            </Provider>
          </LocaleProvider>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;

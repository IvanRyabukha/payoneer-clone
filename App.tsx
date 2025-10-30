import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { LanguageProvider } from './src/context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </LanguageProvider>
  );
}

export default App;

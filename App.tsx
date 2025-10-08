import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";

function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;

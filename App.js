import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen from "./components/Screen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: Screen
  },
  {
    initialRouteName: "Screen",
    defaultNavigationOptions: {
      title: "App",
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#F5B7B1'
      }
    },
  },
);

export default createAppContainer(navigator);

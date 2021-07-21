import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Screen from "./components/Screen";
import ListScreen from "./components/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: Screen,
    List: ListScreen
  },
  {
    initialRouteName: "List",
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

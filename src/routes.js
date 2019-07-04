import MainScreen from "~/screens/main/index";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const screens = createSwitchNavigator({
    Main: MainScreen
});

const Routes = createAppContainer(screens);

export default Routes;

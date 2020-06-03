import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile59388Navigator from '../features/UserProfile59388/navigator';
import Tutorial59387Navigator from '../features/Tutorial59387/navigator';
import NotificationList59359Navigator from '../features/NotificationList59359/navigator';
import Settings59358Navigator from '../features/Settings59358/navigator';
import Settings59350Navigator from '../features/Settings59350/navigator';
import UserProfile59348Navigator from '../features/UserProfile59348/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile59388: { screen: UserProfile59388Navigator },
Tutorial59387: { screen: Tutorial59387Navigator },
NotificationList59359: { screen: NotificationList59359Navigator },
Settings59358: { screen: Settings59358Navigator },
Settings59350: { screen: Settings59350Navigator },
UserProfile59348: { screen: UserProfile59348Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

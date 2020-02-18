import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Register from "./pages/Register";
import Verify from "./pages/Verify";
import SelectClass from "./pages/SelectClass";
import ChooseInvestiments from "./pages/ChooseInvestiments";
import ChooseLoan from "./pages/ChooseLoan";


const mainNavigation = createSwitchNavigator({
  Register,
  Verify,
  SelectClass,
  ChooseInvestiments,
  ChooseLoan
});


export default createAppContainer(mainNavigation);

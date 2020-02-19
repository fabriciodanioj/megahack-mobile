import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Register from "./pages/Register";
import SelectClass from "./pages/SelectClass";
import ChooseInvestiments from "./pages/ChooseInvestiments";
import ChooseLoan from "./pages/ChooseLoan";
import Apresentation1 from "./pages/Apresentation1";
import Apresentation2 from "./pages/Apresentation2";
import About from "./pages/About";
import Investiments from "./pages/Investiments";
import Loan from "./pages/Loan";

const mainNavigation = createSwitchNavigator({
  About,
  Apresentation1,
  Apresentation2,
  Register,
  SelectClass,
  ChooseInvestiments,
  ChooseLoan,
  Investiments,
  Loan
});

export default createAppContainer(mainNavigation);

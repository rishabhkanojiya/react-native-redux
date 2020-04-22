import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BlogList from "../screens/BlogsScreen/BlogList";
import BlogCreate from "../screens/BlogsScreen/BlogCreate";
import BlogEdit from "../screens/BlogsScreen/BlogEdit";
import BlogShow from "../screens/BlogsScreen/BlogShow";

const navigator = createStackNavigator(
  {
    List: {
      screen: BlogList,
    },
    Create: {
      screen: BlogCreate,
      navigationOptions: {
        title: "Create Blog",
        // animationEnabled: false,
      },
    },
    Edit: BlogEdit,
    Show: BlogShow,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

export default createAppContainer(navigator);

import React from "react";
import { AppLoading } from "expo";
import { Container, Text, Content } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Navigation from "./src/navigation/Navigation";
import Root from "./src/Root";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
        <Container>
          <Navigation />
        </Container>
      </Root>
    );
  }
}

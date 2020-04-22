import React from "react";
import { StyleSheet } from "react-native";
import { Card, CardItem, Text, Body, View } from "native-base";

const CardComp = ({ title, content }) => {
  return (
    <View padder>
      <Card>
        <CardItem header>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{content}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default CardComp;

const styles = StyleSheet.create({});

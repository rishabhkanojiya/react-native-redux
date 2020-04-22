import React from "react";
import { StyleSheet } from "react-native";
import { Card, CardItem, Text, Body, View } from "native-base";

const BlogShow = () => {
  return (
    <View padder>
      <Card>
        <CardItem header>
          <Text>NativeBase</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>//Your text here</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default BlogShow;

const styles = StyleSheet.create({});

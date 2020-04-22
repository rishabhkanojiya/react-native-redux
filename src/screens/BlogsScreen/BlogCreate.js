import React from "react";
import { StyleSheet } from "react-native";
import FormComp from "../FormComp";
import shortid from "shortid";
import { fetchBlog } from "../../actions";
import { Button, View, Text } from "native-base";

const BlogCreate = ({ navigation }) => {
  return (
    <>
      <FormComp
        onSubmit={(Title, BContent, dispatch) => {
          fetchBlog(dispatch, { id: shortid.generate(), Title, BContent });
          // navigation.navigate("List");
        }}
      />

      <Button
        block
        primary
        style={styles.btnStyle}
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text> Go to List </Text>
      </Button>
    </>
  );
};

export default BlogCreate;

const styles = StyleSheet.create({
  btnStyle: {
    margin: 10,
  },
});

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button, Text, View } from "native-base";
import { useDispatch } from "react-redux";
// import { fetchBlog, editBlog } from "../actions";
// import shortid from "shortid";
// navigation, mode, id,
const FormComp = ({ onSubmit }) => {
  const [Title, setTitle] = useState("");
  const [BContent, setBContent] = useState("");
  const dispatch = useDispatch();
  const handleUser = (text) => {
    setTitle(text);
  };
  return (
    <View padder>
      <Form>
        <Item stackedLabel>
          <Label>Title</Label>
          <Input value={Title} onChangeText={handleUser} />
        </Item>
        <Item stackedLabel>
          <Label>Content</Label>
          <Input
            value={BContent}
            onChangeText={(text) => {
              setBContent(text);
            }}
          />
        </Item>
        <Button
          block
          primary
          style={styles.btnStyle}
          onPress={() => {
            onSubmit(Title, BContent, dispatch);
            setBContent("");
            setTitle("");

            // if (mode === "edit") {
            //   editBlog(dispatch, { id, Title, BContent });
            // }
            // fetchBlog(dispatch, { id: shortid.generate(), Title, BContent });
            // setTitle("");
            // setBContent("");
          }}
        >
          <Text> Submit </Text>
        </Button>
        {/* <Button
          block
          primary
          style={styles.btnStyle}
          onPress={() => {
            navigation.navigate("List");
          }}
        >
          <Text> Go to List </Text>
        </Button> */}
      </Form>
    </View>
  );
};

export default FormComp;

/**
 
how to use defaultProps


 * FormComp.defaultProps = {
  initialValues: {
    Title: "",
    BContent: "",
  },
};

const FormComp = ({ onSubmit, initialValues }) => {
  const [Title, setTitle] = useState(initialValues.Title);
  const [BContent, setBContent] = useState(initialValues.BContent);

 
 
 */

const styles = StyleSheet.create({
  btnStyle: {
    marginVertical: 10,
  },
});

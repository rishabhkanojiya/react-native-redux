import React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  List,
  ListItem,
  Text,
  View,
  Button,
  Right,
  Icon,
  Left,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog, editBlog } from "../../actions";

const deleteBlogFunc = (id, dispatch) => {
  deleteBlog(dispatch, id);
};

const renderList = (data, isLoading, dispatch, navigation) => {
  if (isLoading) {
    return <></>;
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(data) => data.id}
      data={data}
      renderItem={({ item }) => {
        return (
          <ListItem>
            <Left>
              <Text>{item.Title}</Text>
            </Left>
            <Right>
              <Button
                transparent
                onPress={() => navigation.navigate("Edit", { id: item.id })}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="circle-edit-outline"
                />
              </Button>
            </Right>
            <Right>
              <Button
                transparent
                onPress={() => deleteBlogFunc(item.id, dispatch)}
              >
                <Icon type="MaterialCommunityIcons" name="delete-circle" />
              </Button>
            </Right>
          </ListItem>
        );
      }}
    />
  );
};

const BlogList = ({ navigation }) => {
  const { payload: blogs, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  if (!blogs.length) {
    return (
      <View style={{ alignSelf: "center", justifyContent: "center", flex: 1 }}>
        <Text>Enter Something</Text>
        <Button
          primary
          style={{ marginVertical: 10 }}
          onPress={() => {
            navigation.navigate("Create");
          }}
        >
          <Text> Enter Data</Text>
        </Button>
      </View>
    );
  }

  return (
    <View>
      <List>{renderList(blogs, isLoading, dispatch, navigation)}</List>
    </View>
  );
};

export default BlogList;

import React from "react";
import { StyleSheet } from "react-native";
import CardComp from "../CardComp";
import FormComp from "../FormComp";
import { useSelector } from "react-redux";
import { editBlog } from "../../actions";

const BlogEdit = (props) => {
  const id = props.navigation.getParam("id");
  const { id: lId, Title, BContent } = useSelector((state) => {
    return state.blog.payload.filter((val) => val.id === id)[0];
  });
  return (
    <>
      <CardComp title={Title} content={BContent} />
      <FormComp
        onSubmit={(Title, BContent, dispatch) => {
          editBlog(dispatch, { id, Title, BContent });
          props.navigation.pop();
        }}
      />
    </>
  );
};

export default BlogEdit;

const styles = StyleSheet.create({});

import React from "react";
import { connect } from "react-redux";
import { Spinner } from "@chakra-ui/core";
import { fetchBlogs } from "./BlogsSlice";
import BlogsPage from "../Components/BlogsPage";
import { store } from "../App";

class BlogsPageContainer extends React.Component {
  componentDidMount() {
    if (!this.props.blogs.meta) {
      store.dispatch(fetchBlogs());
    }
  }

  onClickNext() {
    store.dispatch(fetchBlogs(this.props.blogs.links.next));
  }
  onClickPrev() {
    store.dispatch(fetchBlogs(this.props.blogs.links.prev));
  }
  render() {
    if (this.props.error) {
      return (
        <div>Ups... It seems there's an error loading the Blogs data.</div>
      );
    }
    if (!this.props.blogs.meta) {
      return <Spinner />;
    }
    return (
      <div>
        <BlogsPage
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          blogs={this.props.blogs}
        />
      </div>
    );
  }
}

const mapState = ({ blogs }) => {
  return {
    blogs: blogs.blogs
  };
};

export default connect(mapState)(BlogsPageContainer);

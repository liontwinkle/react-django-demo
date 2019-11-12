import React from "react";
import { Heading } from "@chakra-ui/core";
import Pagination from "./Pagination";
import SingleBlog from "./SingleBlog";

const BlogsPage = ({ blogs, onClickNext, onClickPrev }) => (
  <div>
    <Heading>This is the Blogs page</Heading>
    {blogs.data.map(blog => (
      <SingleBlog key={blog.id} blog={blog} />
    ))}
    <Pagination
      links={blogs.links}
      meta={blogs.meta}
      currentPage={blogs.meta.pagination.page}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  </div>
);

export default BlogsPage;

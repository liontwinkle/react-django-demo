import React from "react";
import { Heading, Badge } from "@chakra-ui/core";

const SingleBlog = ({ blog }) => (
  <div>
    <Heading as="h2">{blog.attributes.name}</Heading>
    <Badge mr={2} variantColor="green">
      {blog.type}
    </Badge>
    <Badge m={2} variantColor="red">
      {blog.id}
    </Badge>
    <Badge ml={2} variantColor="purple">
      {blog.meta.copyright}
    </Badge>
  </div>
);

export default SingleBlog;

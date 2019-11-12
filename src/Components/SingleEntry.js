import React from "react";
import { Heading, Badge, Text } from "@chakra-ui/core";
import Comment from "./Comment";

const SingleEntry = ({ entry, included }) => {
  const comments = included.filter(
    comment =>
      (comment.type === "comment") &
      (comment.relationships.entry.data.id === entry.id)
  );
  return (
    <div>
      <Heading as="h2">{entry.attributes.headline}</Heading>
      <Badge mr={2} variantColor="green">
        {entry.type}
      </Badge>
      <Badge m={2} variantColor="red">
        {entry.id}
      </Badge>
      <Badge ml={2} variantColor="purple">
        {entry.attributes.pubDate}
      </Badge>
      <Text>{entry.attributes.bodyText}</Text>
      <Heading as="h3">Comments: </Heading>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default SingleEntry;

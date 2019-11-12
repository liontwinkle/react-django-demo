import React from "react";
import { Icon, Flex, Link } from "@chakra-ui/core";

const ICON_SIZE = "30px";

const Pagination = ({ currentPage, onClickNext, onClickPrev, links, meta }) => {
  const prevPage = links.prev ? (
    <Link onClick={() => onClickPrev()}>
      <Icon name="chevron-left" size={ICON_SIZE} />
    </Link>
  ) : null;

  const nextPage = links.next ? (
    <Link onClick={() => onClickNext()}>
      <Icon name="chevron-right" size={ICON_SIZE} />
    </Link>
  ) : null;
  return (
    <Flex align="center" justify="center">
      {prevPage}
      <Link>
        <span>{currentPage}</span>
      </Link>
      <span>&nbsp;{` out of ${meta.pagination.page} pages`}</span>
      {nextPage}
    </Flex>
  );
};

export default Pagination;

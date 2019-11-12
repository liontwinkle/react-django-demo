import React from "react";
import { Heading } from "@chakra-ui/core";
import Pagination from "./Pagination";
import SingleEntry from "./SingleEntry";

const EntriesPage = ({ entries, onClickNext, onClickPrev }) => (
  <div>
    <Heading>This is the Entries page</Heading>
    {entries.data.map(entry => (
      <SingleEntry key={entry.id} included={entries.included} entry={entry} />
    ))}
    <Pagination
      links={entries.links}
      meta={entries.meta}
      currentPage={entries.meta.pagination.page}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  </div>
);

export default EntriesPage;
